import axios from "axios";

export const getNfts = async (walletAddress) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const getNftResponse = await axios
    .get(`/v2/nftkit/nft/chain/SEPOLIA/owner/${walletAddress}`, {
      baseURL: baseURL,
    })
    .then((response) => {
      console.log("data: " + response.data);
      return response.data.evmNfts[0];
    })
    .catch((error) => {
      console.log("an error occurred from getNFTs: " + error);
    })
    .finally(() => {});
  return getNftResponse;
};

export const verifyNft = async (walletAddress, tokenId) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const smartContractAddress = import.meta.env.VITE_SMART_CONTRACT_ADDRESS;

  const verifyNftResponse = await axios
    .get(
      `/v2/nftkit/nft/verifier/chain/SEPOLIA/contract/${smartContractAddress}/verifyNftOwnership?account=${walletAddress}&tokenId=${tokenId}`,
      {
        baseURL: baseURL,
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("an error occurred from verifyNFTs: " + error.response);
    })
    .finally(() => {});
  return verifyNftResponse;
};
