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
            "after:absolute after:inset-[-5rem] md:after:inset-0 after:bg-gradient-to-b after:from-black after:via-transparent after:to-black "
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
      <div className="flex mt-[60vw] md:mt-[20vw] font-light bg-white/10 relative z-0">
        {/* Optimize it */}
        <div className=" flex items-center gap-10 py-10 overflow-hidden">
          {new Array(2).fill(0).map((_, index) => (
            <div
              key={`roll-tape-${index}`}
              className="flex min-w-full flex-shrink-0 justify-around gap-10 animate-infinite-scroll-text [--speed:40s]"
            >
              {ROLL_TAPE_CONTENT.map((content, idx) => (
                <p
                  className="text-md md:text-lg text-nowrap"
                  key={`roll-tape-item-${(index + 1) * idx}`}
                >
                  {content}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

const ROLL_TAPE_CONTENT = [
  "Advanced",
  "•",
  "Enterprise Grade",
  "•",
  "Multi-layered Security",
  "•",
  "Custom-centric",
  "•",
  "Robust encryption",
  "•",
];
