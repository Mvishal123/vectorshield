import About from "@/components/about";
import EarlyAccess from "@/components/early-access";
import Hero from "@/components/hero";
import How from "@/components/how";
import Testimonials from "@/components/testimonials";
import Why from "@/components/why";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Why />
      <How />
      <Testimonials />
      <EarlyAccess />
    </div>
  );
};

export default Page;
