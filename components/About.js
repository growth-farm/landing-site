import React from "react";
import Parallax from "./Parallax";

const AboutPoints = ({ head, info }) => {
  return (
    <div className="flex p-4 md:py-4 md:px-2">
      <div className="mr-12">
        <div
          style={{
            background:
              "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
          }}
          className="bg-[red] h-[3px] w-12 mb-2 md:w-8"
        ></div>
        <p className="w-48 md:w-36 text-xl font-bold md:text-sm">{head}</p>
      </div>
      <div>
        <p className="w-96 text-[#81AFDD] md:hidden">{info}</p>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <Parallax offset={500} align={true}>
    <div className="flex items-center justify-center m-8 md:m-2 md:w-[85vw]">
      <div className="mr-36 md:mr-4">
        <div className="w-[25vw] md:w-[55vw]">
          <div className="text-4xl md:text-xl font-bold mb-16 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Industry leading projects would be elevated by AI.We would help you
            get there.
          </div>
          <div className="text-[#FF8A71] md:text-xs">
            As your strategic partner, we work together to bring AI technologies
            into production to benefit your customers.
          </div>
        </div>
      </div>
      <div className="">

        <AboutPoints
          head={"AI for competitive edge"}
          info={
            "We help you bring state-of-the-art AI into production to benefit your customers."
          }
        />

        <AboutPoints
          head={"World-class AI expertise"}
          info={
            "Build cutting-edge AI into your products and elevate your internal AI capabilities by partnering up with GrowthFarm"
          }
        />

        <AboutPoints
          head={"Customizable AI solutions"}
          info={
            "Reduce risk and speed up innovation time-to-market with advanced AI solutions and tooling, ready to be tailored for your use case."
          }
        />

        <AboutPoints
          head={"Implementation"}
          info={
            "We work closely with you to integrate our solutions into your existing systems and processes. We also provide training and support to ensure a smooth transition."
          }
        />
      </div>
    </div>
    </Parallax>
  );
};
