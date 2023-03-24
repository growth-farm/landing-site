import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="flex md:justify-between p-6 items-center text-[#81AFDD] md:px-1">
      <div className="text-3xl font-bold mx-8 md:mx-3 md:mb-4 md:text-2xl">Growthfarm</div>
      <ul className="flex item-center mt-2 text-l md:hidden">
        <li className="mx-6 cursor-pointer">Home</li>
        <li className="mx-6 cursor-pointer">About Growthfarm</li>
        <li className="mx-6 cursor-pointer">Case Studies</li>
        <li className="mx-6 cursor-pointer">Library</li>
      </ul>
      <ul className="flex item-center text-l hidden md:block pb-4 pr-3">
        <div className="cursor-pointer"><Image src={"/hamburger.svg"} width={25} height={25} alt="hamburger icon"></Image></div>
      </ul>
    </div>
  )
}
