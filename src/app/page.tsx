import BestSelling from "@/components/BestSelling";
import Clients from "@/components/Clients";
import Creations from "@/components/Creations";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <BestSelling />
      <Creations />
      <Clients />
    </>
  );
};

export default Home;
