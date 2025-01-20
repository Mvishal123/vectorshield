import clsx from "clsx";
import React from "react";
import { WavvyPattern4, WavvyPattern5 } from "./illustration/wavvy-pattern";
import Image from "next/image";
import { InvertedCommas } from "./icons";

const TESTIMONIALS = [
  {
    name: "Jane Smith",
    company: "Innovative Labs",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    testimonial:
      "As a startup focused on AI innovation, security is paramount. VectorShield gives us the peace of mind we need to focus on building cutting-edge solutions.",
  },
  {
    name: "John Doe",
    company: "Acme Corp",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    testimonial:
      "We were looking for a modern, trustworthy AI security solution that wouldn't slow down our development. VectorShield exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    company: "Innovative Labs",
    position: "Head of AI",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    testimonial:
      "Before VectorShield, managing AI security felt like navigating a minefield. Now, it's incredibly streamlined. Their platform is both powerful and user-friendly.",
  },
];

interface TestimonialType {
  name: string;
  company: string;
  position: string;
  image: string;
  testimonial: string;
}

const Testimonials = () => {
  return (
    <div className={clsx("bg-background relative overflow-hidden")}>
      <div className="pt-section relative z-20">
        <div className="text-center">
          <h1 className="text-[2.8rem] md:text-4xl">
            Trusted by AI Innovators and developers
          </h1>
          <p className="text-[#745C6B] text-sm md:text-xl">
            We protect your AI stack so that you can focus on
            <br />
            building intelligence while we take care of rest
          </p>
        </div>
        <div className="mt-section">
          <div className="flex items-center gap-10 -translate-x-[8rem]">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestmonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* gradient */}
      <div className="absolute inset-0">
        <div className="" />
        <div className="h-full bg-gradient-to-b from-transparent via-[#76004721] to-transparent" />
      </div>

      {/* patterns */}
      <div className="hidden md:block absolute left-0 -top-[500px] z-10">
        <WavvyPattern4 />
      </div>
      <div className="hidden md:block absolute right-0 -top-[500px] z-10">
        <WavvyPattern5 />
      </div>
    </div>
  );
};

export default Testimonials;

const TestmonialCard = ({ testimonial }: { testimonial: TestimonialType }) => (
  <div className="bg-[#2B0F20] flex-shrink-0 p-20 md:max-w-[600px] w-full rounded-[3.2rem] flex flex-col">
    <div>
      <Image
        src={InvertedCommas}
        alt="Inverted Commas"
        width={40}
        height={40}
        className="size-[2.4rem]"
      />
    </div>
    <p className="text-[#C4C4C4] font-light mt-10">{testimonial.testimonial}</p>
    <div className="mt-20 flex items-center">
      <div className="rounded-full size-[5.5rem]">
        <Image
          src={testimonial.image}
          alt={`${testimonial.name}-image`}
          width={150}
          height={150}
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="ml-3">
        <span className="text-[#E0E0E0]">{testimonial.name}</span>
        <span className="flex flex-col text-[#745C6B] font-light">
          {testimonial.position}, {testimonial.company}
        </span>
      </div>
    </div>
  </div>
);
