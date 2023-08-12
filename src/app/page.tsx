import React from "react";

import MegaHeader from "@/components/layout/home/MegaHeader";
import Navbar from "@/components/layout/home/Navbar";
import Feature from "@/components/layout/home/Feature";
import Pricing from "@/components/layout/home/Pricing";
import Newsletter from "@/components/layout/home/Newsletter";

const Home = () => {
  return (
    <>
      <Navbar />
      <MegaHeader />
      <Feature />
      <Pricing />
      <Newsletter />
    </>
  );
};

export default Home;
