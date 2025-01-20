import clsx from "clsx";
import Image from "next/image";
import How1Illustration from "./illustration/how-1";
import How2Illustration from "./illustration/how-2";
import How3Illustration from "./illustration/how-3";
import Section from "./section";
import How4Illustration from "./illustration/how-4";

interface HowContentType {
  content: string;
  illustration: React.FC;
}

const HOW_CONTENT: HowContentType[] = [
  {
    content: "Enter your AI application endpoint to secure",
    illustration: How1Illustration,
  },
  {
    content:
      "Generate secure endpoints with end-to-end, bidirectional security",
    illustration: How2Illustration,
  },
  {
    content: "Employ the secure endpoint consistently across all platforms",
    illustration: How3Illustration,
  },
  {
    content: "Customize with full visibility and control",
    illustration: How4Illustration,
  },
];

const How = () => {
  return (
    <div className="relative bg-background md:pb-[16rem]">
      {/* Stairs image */}
      <div
        className={clsx(
          "absolute h-[80vw] md:h-[30vw]",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-background"
        )}
      >
        <Image
          alt="stairs-background"
          src="/images/stairs.png"
          width={2880}
          height={1212}
          className={clsx("object-cover object-right md:object-center h-full")}
        />
      </div>

      {/* Content */}
      <Section className="relative z-20 pt-[27rem] md:pt-[16rem]">
        <h1 className="text-center text-4xl">How it Works?</h1>
        <div className="mt-section">
          <div className="grid grid-cols-1 gap-15 md:grid-cols-2">
            {HOW_CONTENT.map((data, index) => (
              <HowCard key={index} data={data} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default How;

const HowCard = ({
  data: { content, illustration: Illustration },
  index,
}: {
  data: HowContentType;
  index: number;
}) => (
  <div className="bg-secondary p-[4rem] pb-10 rounded-3xl even:md:translate-y-[12rem]">
    <div className="text-xs sm:text-lg lg:text-xl text-gradient-orange">STEP 0{index + 1}</div>
    <p className="text-sm sm:text-xl lg:text-2xl text-[#BFBFBF] mt-5">{content}</p>
    <div className="flex justify-end mt-5">
      <Illustration />
    </div>
  </div>
);
