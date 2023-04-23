import Image from "next/image";
import React from "react";
import Parallax from "./Parallax";

export const Possibilities = () => {
    return (
        <div className="flex justify-center items-center mt-20 mb-20 md:flex-col">
            <div>
                <Image src={"/face2.png"} width={400} height={400} className="mr-36 md:w-72 md:h-72 md:m-auto rounded-2xl" />
            </div>
            <Parallax offset={80}>
                <div>
                    <div className="text-4xl md:text-2xl md:p-8 md:text-center pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 ">The possibilities are<br className="md:hidden" /> beyond your imagination</div>
                    <div className="text-[#81AFDD] max-w-[30vw] md:pl-8 md:text-sm">
                    GrowthFarm's AI-powered SEO sorcery! Reach out to us today and let's embark on an epic journey towards exceptional organic growth!
                    </div>
                    <div className="text-[#FF8A71] mt-12 cursor-pointer md:text-center">Get in touch with an AI Expert</div>
                </div>
            </Parallax>
        </div>
    );
};
