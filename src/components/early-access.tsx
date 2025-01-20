"use client";

import { useState } from "react";
import Input from "./input";
import Section from "./section";
import Button from "./button";
import CircularStarsIllustration from "./illustration/circular-stars";

const EarlyAccess = () => {
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const isDisabled = !email || !company;
  return (
    <div className="bg-background relative overflow-hidden">
      <Section className="py-[18rem] relative z-20">
        <h1 className="text-center text-3xl md:text-start text-gradient-blue-green ">
          Be the early to secure <br className="md:hidden"/> your AI-driven future
        </h1>
        <div className="flex flex-col mt-[20rem] md:mt-10 gap-5 max-w-[48rem]">
          <Input
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
          <Input
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany((e.target as HTMLInputElement).value)}
          />
        </div>
        <p className="text-xs text-center md:text-start text-[#5C5C5C] mt-2">
          We respect your privacy and will never share your information
        </p>
        <div className="mt-[4.5rem] flex justify-center md:justify-start h-[5rem]">
          <Button variant="primary" size={"big"} disabled={isDisabled}>
            Get Free Early Access
          </Button>
        </div>
      </Section>

      {/* Pattern */}
      <div className="absolute  -right-[400px] bottom-0 md:-bottom-[400px] z-10">
        <CircularStarsIllustration />
      </div>
    </div>
  );
};

export default EarlyAccess;
