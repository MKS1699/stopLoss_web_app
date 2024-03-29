import React from "react";
import LandingPage from "./landingPage/page";
import { TitleBar } from "@/app/components";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <TitleBar />
      <LandingPage />
    </div>
  );
};

export default Home;
