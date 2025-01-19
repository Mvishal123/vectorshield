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
      <Section className="py-[18rem]">
        <h1 className="text-3xl text-gradient-blue-green ">Be the early to secure your AI-driven future</h1>
        <div className="flex flex-col mt-10 gap-5">
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
        <p className="text-xs text-[#5C5C5C] mt-2">
          We respect your privacy and will never share your information
        </p>
        <div className="mt-[4.5rem]">
          <Button variant="primary" size={"big"} disabled={isDisabled}>
            Get Early Access
          </Button>
        </div>
      </Section>

      {/* Pattern */}
      <div className="absolute -right-[400px] -bottom-[400px] z-10">
        <CircularStarsIllustration />
      </div>
    </div>
  );
};

export default EarlyAccess;
