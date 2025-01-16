import ShieldIllustration from "./illustration/shield";
import StarIllustration from "./illustration/star";
import { WavvyPattern1, WavvyPattern2 } from "./illustration/wavvy-pattern";
import Section from "./section";

const About = () => (
  <div className="bg-background">
    <Section className="w-full pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="flex-shrink-0  grid-card shadow-inner shadow-white/10 relative overflow-hidden">
        <div className="mt-[15rem]">
          <div className="text-[12rem] font-medium">84%</div>
          <p className="text-xl relative text-text-secondary">
            Businesses see security as a major roadblock to{" "}
            <span className="text-gradient-orange">AI adoption</span>
            <span className="absolute -top-2 -left-9 scale-[130%]">
              <StarIllustration />
            </span>
            <span className="absolute -top-8 -left-1">
              <StarIllustration />
            </span>
          </p>
        </div>
        {/* Pattern */}
        <div className="absolute right-0 top-0 z-0">
          <WavvyPattern1 />
        </div>
      </div>
      <div className="flex-shrink-0  grid-card shadow-inner shadow-white/10 relative overflow-hidden">
        <div className="">
          <div className="text-gradient-green text-4xl font-medium">VectorShield</div>
          <p className="text-text-secondary text-xl">
            protects your AI application against New Threat Vectors with{" "}
            <span className="text-white">
              a best-in-class, low-latency security shield,{" "}
            </span>{" "}
            deployable with a single click
          </p>
          <div className="mt-[4.8rem]">
            <ShieldIllustration />
          </div>
        </div>
        {/* Pattern */}
        <div className="absolute right-0 bottom-0 z-0">
          <WavvyPattern2 />
        </div>
      </div>
    </Section>
  </div>
);

export default About;
