import React from "react";
import Section from "./section";
import Button, { IconWrapper } from "./button";
import Image from "next/image";
import clsx from "clsx";
import { chevronRight } from "./icons";

const Hero = () => {
  return (
    <>
      <Section className="relative">
        <div className="relative z-10 text-center mt-[18.4rem]">
          <h1 className="text-[3.6rem] md:text-6xl font-light">
            The Security Layer <br />
            For AI Applications
          </h1>
          <p className="text-xs text-text-secondary mt-5">
            Secure your systems with AI security from the start <br /> Deploy in
            minutes, not months
          </p>
          <div className="space-x-5 mt-20 flex items-center justify-center">
            <Button>Get Early Access</Button>
            <Button variant="outlined">
              <IconWrapper>
                <Image
                  src={chevronRight}
                  alt="arrow-right-icon"
                  width={16}
                  height={16}
                />
              </IconWrapper>
              Get Early Access
            </Button>
          </div>
        </div>

        {/* hero image */}
        <div
          className={clsx(
            "absolute top-[18rem] md:top-0 left-0 right-0 -z-10 overflow-hidden",
            "after:absolute   after:inset-[-5rem] md:after:inset-0 after:bg-gradient-to-b after:from-black after:via-transparent after:to-black "
          )}
        >
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={1440}
            height={770}
            className="object-cover scale-150 md:scale-125"
          />
        </div>
      </Section>
      <div className="flex overflow-hidden mt-[60vw] md:mt-[20vw] font-light bg-white/10 relative z-0">
        <div className="text-md md:text-lg text-nowrap  flex items-center gap-12 py-10 mr-12">
          <span>Advanced</span>
          <span>•</span>
          <span>Enterprise Grade</span>
          <span>•</span>
          <span>Multi-layered Security</span>
          <span>•</span>
          <span>Custom-centric</span>
          <span>•</span>
          <span>Robust encryption</span>
          <span>•</span>
        </div>
        <div className="text-lg text-nowrap  flex items-center gap-12 py-10">
          <span>Advanced</span>
          <span>•</span>
          <span>Enterprise Grade</span>
          <span>•</span>
          <span>Multi-layered Security</span>
          <span>•</span>
          <span>Custom-centric</span>
          <span>•</span>
          <span>Robust encryption</span>
          <span>•</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
