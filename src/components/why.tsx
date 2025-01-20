import React from "react";
import Section from "./section";
import SwitchIllustration from "./illustration/switch";
import ShieldGridIllustration from "./illustration/shield-grid";
import LightningIllustration from "./illustration/lightning";
import EyeIllustration from "./illustration/eye";
import { WavvyPattern3 } from "./illustration/wavvy-pattern";

interface WhyContentType {
  title: string;
  description: string;
  icon: React.FC;
}

const WhyContent: WhyContentType[] = [
  {
    title: "Ridiculously Easy ",
    description: "Implement enterprise-grade security in minutes, not months",
    icon: SwitchIllustration,
  },
  {
    title: "Comprehensive Security",
    description: "Comprehensive security coverage across all AI threat vectors",
    icon: ShieldGridIllustration,
  },
  {
    title: "Low Latency",
    description:
      "Built for performance with minimal impact on your response times",
    icon: LightningIllustration,
  },
  {
    title: "Complete Visibility",
    description: "Have complete observability over your AI application",
    icon: EyeIllustration,
  },
];

const Why = () => {
  return (
    <div className="bg-secondary relative py-[15rem] md:py-section overflow-hidden">
      <Section className="relative z-20">
        <h1 className="text-3xl md:text-4xl text-center text-text-secondary">
          Why add <span className="text-white"> VectorShield</span> to Your AI
          Stack?
        </h1>
        <div className="mt-section grid grid-cols-1 md:grid-cols-2 gap-18 ">
          {WhyContent.map((content, index) => (
            <WhyCard key={`why-${index}`} item={content} index={index} />
          ))}
        </div>
      </Section>

      {/* Pattern */}
      <div className="absolute max-md:-top-[340px] max-md:left-1/2 max-md:-translate-x-1/2  max-md:-rotate-90 md:right-0 md:top-1/2 md:-translate-y-1/2 z-10 ">
        <WavvyPattern3 />
      </div>
      <div className="absolute max-md:-bottom-[340px] max-md:left-1/2 max-md:-translate-x-1/2  max-md:rotate-90  md:left-0 md:rotate-180 md:top-1/2 md:-translate-y-1/2 z-10 ">
        <WavvyPattern3 />
      </div>
    </div>
  );
};

export default Why;

const WhyCard = ({
  item: { icon: Icon, title, description },
  index,
}: {
  item: WhyContentType;
  index: number;
}) => {
  return (
    <div className="overflow-hidden bg-background p-20 rounded-[3.2rem] relative">
      <Icon />
      <h2 className="text-2xl text-[#C4C4C4] mt-12">{title}</h2>
      <p className="text-lg text-text-secondary mt-4 ">{description}</p>

      {/* index */}
      <div className=" absolute -top-10 -right-10 rounded-full border size-[12rem] flex items-center justify-center text-text-secondary border-text-secondary/20 text-3xl p-3">
        <span className="translate-y-3 -translate-x-2">0{index + 1}</span>
      </div>
    </div>
  );
};
