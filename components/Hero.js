import Image from "next/image";
import React, { useRef } from "react";
import Parallax from "./Parallax";
import { Particle } from "./Particles";

export const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-16 py-6 md:pb-0 md:pt-4">
        <Parallax spring={true}>
          <div className="mr-10 pt-16 md:text-center md:mx-2 md:px-10 md:mb-8">
            <h1 className="pb-14 font-bold text-6xl md:text-[35px] max-w-[51vw] md:max-w-[98vw] md:pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">
            Unleash Your Organic Growth with AI
            </h1>
            <p className="pb-4 text-sm text-[#81AFDD] md:mb-4 max-w-[51vw] md:max-w-[95vw]">
            GrowthFarm is a leading SEO agency that uses artificial intelligence and expertise to drive organic growth. With a track record of success in industries such as edtech and healthtech, our team can take your business from 0 to over 100M monthly visits.
            </p>
            <div className="flex items-center md:justify-center">
              <input
                className="outline-none w-[30vw] md:w-[50vw] h-14 md:h-12 bg-[#052D56] placeholder-[#3D6184] pl-4 rounded-l-sm"
                placeholder="Your Email Address"
              />
              
              <div className="bg-[#FF4820] w-36 text-center h-14 md:h-12 pt-4 md:pt-3 rounded-r-sm cursor-pointer">
                <a target="_blank" href="https://calendly.com/growthfarm42/30min">
                Get in touch
                </a>
              </div>
            </div>
            <div className="flex pt-4 md:pt-8 items-center">
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <p className="ml-2 text-sm md:text-xs">
                1000+ Marketing Leaders have requested to get on a call in the
                last 1 week
              </p>
            </div>
          </div>
        </Parallax>
        <Parallax offset={180} spring={true}>
          <div className="ml-16 md:hidden">
            <Particle />
            <Image
              className="relative"
              src="/face.svg"
              width={420}
              height={420}
            />
          </div>
        </Parallax>
      </div>
      <div className="flex justify-center md:flex-wrap mt-4">
        <Image
          className="mx-8 md:m-3"
          src="/LOGOS/byjus.svg"
          width={130}
          height={130}
        />
          <Image
            className="mx-8 md:m-3"
            src="/LOGOS/toppr.svg"
            width={75}
            height={75}
          />
          <Image
            className="mx-8 md:m-3"
            src="/LOGOS/medscape.svg"
            width={120}
            height={120}
          />
          <Image
            className="mx-8 md:m-3"
            src="/LOGOS/tata-1mg.svg"
            width={100}
            height={100}
          />
        <Image
          className="mx-8 md:m-3 mb-6 md:mt-[-10px]"
          src="/LOGOS/infinity-learn.png"
          width={100}
          height={100}

        />
        <Image
          className="mx-8 md:m-3"
          src="/LOGOS/webmd.svg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
