import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { approved, wrong } from "../../assets";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getNfts } from "../../apis/verifyNft";
import { verifyNft } from "../../apis/verifyNft";
import { propTypesDisabled } from "@material-tailwind/react/types/components/accordion";

const NFTVerification = ({ setIsVerified, isVerified }) => {
  const [tokenId, setTokenId] = useState(0);
  const { address, isConnected } = useAccount();
  const [progress, setProgress] = useState([
    { label: "Getting NFT", success: false },
    { label: "Verifying NFT", success: false },
    { label: "Success", success: false },
  ]);

  const [open, setOpen] = useState(false);
  const [isProgressComplete, setIsProgressComplete] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const handleOpen = () => setOpen(!open);

  const getNftFunction = async (index) => {
    const updatedProgress = [...progress];
    const getNftResponse = await getNfts(address);
    if (!getNftResponse?.isEmpty) {
      console.log("nft retrieved");
      setTokenId(getNftResponse?.id.tokenId);
      updatedProgress[index].success = true;
      setProgress(updatedProgress);
    } else if (getNftResponse?.isEmpty) {
      console.log("nft not retrieved");
      updatedProgress[index].success = false;
      setProgress(updatedProgress);
    }
    setActiveStage(activeStage + 1);
  };

  const verifyNftFunction = async (index, tokeen) => {
    const updatedProgress = [...progress];
    const verifyNftResponse = await verifyNft(address, tokeen);
    if (verifyNftResponse === true) {
      console.log("nft successfully verified");
      updatedProgress[index].success = true;
      setProgress(updatedProgress);
    } else {
      console.log("nft not verified");
      updatedProgress[index].success = false;
      setProgress(updatedProgress);
    }
    setActiveStage(activeStage + 1);
  };

  const successFunction = (index) => {
    const updatedProgress = [...progress];
    updatedProgress[index].success = true;
    setProgress(updatedProgress);
    setActiveStage(activeStage + 1);
    setIsProgressComplete(true);
  };

  useEffect(() => {
    if (activeStage === 0) {
      getNftFunction(0);
    } else if (activeStage === 1) {
      verifyNftFunction(1, tokenId);
    } else if (activeStage === 2) {
      const timeoutId = setTimeout(() => {
        successFunction(2);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [address, activeStage, tokenId]);

  const isVerificationSuccess = () => {
    // Check if all tasks are done by using the Array.every() method
    return progress.every((task) => task.success === true);
  };

  const handleOnSubmit = () => {
    console.log("is success:" + isVerificationSuccess());
    if (isVerificationSuccess() === true) {
      setIsVerified(true);
      setOpen(false);
    } else {
      setIsVerified(false);
      setOpen(false);
    }
  };

  return (
    <>
      {isConnected === true && open === true ? (
        <div className="w-1/2 h-1/2 rounded-xl bg-gray-900 flex flex-col items-center p-10 justify-evenly">
          <ConnectButton />
          <h1 className="text-white text-2xl">
            Verifying your&nbsp;
            <span className="text-red-500 font-bold">NETID</span>
          </h1>
          <div className="flex flex-row gap-10">
            {isProgressComplete ? (
              <div className="flex flex-col items-center">
                <img
                  src={isVerificationSuccess() ? approved : wrong}
                  alt="approved"
                  className="w-16 h-16"
                />
                <h1
                  className={`w-fulltext-xl ${
                    isVerificationSuccess() ? "text-green-600" : "text-red-600"
                  } font-bold`}
                >
                  {isVerificationSuccess()
                    ? "You are authorized"
                    : "Sorry, you are not authorized"}
                </h1>
              </div>
            ) : (
              progress.map((progress, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center space-x-1 ${
                    index === activeStage ? "font-bold" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full  ${
                      progress.success
                        ? "bg-green-500"
                        : index === activeStage
                        ? " bg-amber-400 animate-pulse"
                        : "bg-gray-300"
                    }`}
                  />
                  <p>{progress.label}</p>
                </div>
              ))
            )}
          </div>
          <Button
            className={`${
              isVerificationSuccess()
                ? "bg-green-500 text-black"
                : "bg-red-500 text-white"
            }`}
            onClick={handleOnSubmit}
          >
            {isVerificationSuccess() ? "Access Service" : "Try Again"}
          </Button>
        </div>
      ) : isConnected === false && open === true ? (
        <ConnectButton />
      ) : (
        <Button onClick={handleOpen} variant="gradient">
          Verify yourself
        </Button>
      )}
    </>
  );
};
export default NFTVerification;
