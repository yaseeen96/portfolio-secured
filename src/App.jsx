import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";
import NFTVerification from "./components/netid/verificationComponent";
import { Button } from "@material-tailwind/react";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  const updateIsVerified = (isVerified) => {
    setIsVerified(isVerified);
  };
  const handleOnClick = () => {
    window.open(
      "https://drive.google.com/file/d/1rL5UNbYL0bVnT9z3Q55bDAXIC69tQ6qC/view?usp=sharing"
    );
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="flex justify-center items-center py-3 px-8">
          <button
            type="submit"
            onClick={handleOnClick}
            className="bg-[#915eff] py-3 px-8 h-16 hover:bg-tertiary  outline-none xs:mt-5 w-fit text-white font-bold shadow-md shadow-primary rounded-xl text-2xl"
          >
            Download Resume
          </button>
        </div>

        <Tech />

        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <div
            className={`${
              isVerified
                ? "hidden"
                : "flex bg-white/30 backdrop-blur-lg absolute inset-0 w-full h-full justify-center items-center mx-auto my-auto z-10"
            }`}
          >
            <NFTVerification
              setIsVerified={updateIsVerified}
              isVerified={isVerified}
            />
          </div>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
