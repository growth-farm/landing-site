import Image from "next/image";
import React, { useRef } from "react";
import Parallax from "./Parallax";
import { Particle } from "./Particles";

export const Hero = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="flex justify-center items-center px-16 py-6 md:pb-0 md:pt-4">
        <Parallax spring={true}>
          <div className="mr-10 pt-16 md:text-center md:mx-2 md:px-10 md:mb-8">
            <h1 className="pb-16 font-bold text-5xl md:text-[40px] max-w-[830px] md:pb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">
            Welcome to GrowthFarm.co -  <br className="md:hidden" />
            Unleashing the power of AI for your organic Growth
            </h1>
            <p className="pb-8 text-sm text-[#81AFDD] md:mb-4 max-w-[830px]">
            At GrowthFarm, we're not just any SEO agency - we're pioneers on a mission to revolutionize the game! By harnessing the power of artificial intelligence and our unmatched expertise in search engine optimization, we help your business soar to new heights in organic growth. Our squad of SEO wizards has a proven track record in driving traffic from 0 to a whopping 100M+ monthly visits across diverse industries like edtech, healthtech, and more.
=======
      <div className="flex justify-center items-center pb-16 md:pb-0 md:pt-4">
        <Parallax spring={true}>
          <div className="mr-24 pt-16 md:text-center md:mx-2 md:px-10 md:mb-8">
            <h1 className="pb-16 font-bold text-6xl md:text-[40px] md:pb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">
              Unlock the power of <br className="md:hidden" />
              AI for your business
            </h1>
            <p className="pb-8 text-sm text-[#81AFDD] md:mb-4">
              Transform your business with AI & Technology services from
              GrowthFarm. From improving demand
              <br /> generation to automating business processes, we deliver
              custom solutions that drive real results.
>>>>>>> 6fc15ec81460292b23222c0a03cf80fc79cbea55
            </p>
            <div className="flex items-center md:justify-center">
              <input
                className="outline-none w-[30vw] md:w-[50vw] h-14 md:h-12 bg-[#052D56] placeholder-[#3D6184] pl-4 rounded-l-sm"
                placeholder="Your Email Address"
              />
              <div className="bg-[#FF4820] w-36 text-center h-14 md:h-12 pt-4 md:pt-3 rounded-r-sm cursor-pointer">
                Get in touch
              </div>
            </div>
            <div className="flex pt-4 md:pt-8 items-center">
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <div className="bg-[#81AFDD] h-10 w-10 md:w-16 rounded-full ml-[-10px]"></div>
              <p className="ml-2 text-sm md:text-xs">
                1,600+ Product Leaders have requested to get on a call in the
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
<<<<<<< HEAD
              width={420}
              height={420}
=======
              width={490}
              height={490}
>>>>>>> 6fc15ec81460292b23222c0a03cf80fc79cbea55
            />
          </div>
        </Parallax>
      </div>
      <div className="flex justify-center md:flex-wrap">
        <Image
          className="mx-8 md:m-3"
          src="/google.svg"
          width={80}
          height={80}
        />
        <Image
          className="mx-8 md:m-3"
          src="/slack.svg"
          width={90}
          height={90}
        />
        <Image
          className="mx-8 md:m-3"
          src="/dropbox.svg"
          width={120}
          height={120}
        />
        <Image
          className="mx-8 md:m-3"
          src="/shopify.svg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
