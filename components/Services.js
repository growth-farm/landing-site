import React from 'react'
import Parallax from './Parallax'

const Service = ({ header, information,link }) => {
  return (
    <div className="flex-[33%] m-4 md:m-1 md:p-1">
      <div className="w-full flex justify-center mb-10">
      <img className="w-16 md:w-8" src={link}></img>
      </div>
      <div className="flex flex-col">
        <div style={{ background: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)" }} className="bg-[red] h-[3px] w-12 mb-2 md:w-8"></div>
        <div className="flex">
        <h2 className="text-xl font-semibold pb-4 md:text-sm flex">{header} </h2>
        </div>
      </div>
      <div className="text-sm text-[#81AFDD] md:hidden">{information}</div>
    </div>
  )
}

export const Services = () => {
  return (
    <div className="my-24 md:my-16">
      <Parallax offset={300} align={true} direction={-1}>
        <div className="w-[80vw] md:w-[85vw] bg-[#042C54] mx-auto p-10 md:p-4" style={{ background: "radial-gradient(circle at 5% 0%, rgba(7, 76, 145,0.4), transparent 20%),radial-gradient(circle at 99.93% 97.58%, rgba(7, 76, 145,0.6), transparent 35%),radial-gradient(circle at 50% 50%, #093159, #093159 100%)" }} >
          <div className="flex justify-between m-4">
            <div className="flex flex-col">
              <div style={{ background: "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)" }} className="bg-[red] h-[3px] w-12 mb-2"></div>
              <h2 className="text-2xl font-semibold pb-4 md:text-xl">Delivering AI Expertise</h2>
            </div>
            <div className="text-sm text-[#81AFDD] md:hidden">Together, we build and scale AI as a part of your products. At GrowthFarm, we offer a range of AI <br /> services and solutions to help your business leverage the latest technologies and grow to its full<br /> potential. Our team of experts specialize in a variety of areas, including:</div>
          </div>
          <div className='flex justify-between mt-6'>
            <Service
              header={"Traffic Boosting Rocket Fuel"}
              information={"Whether you're a startup or an industry titan, we've got you covered. We've grown traffic from 0 to 3M monthly (Infinity Learn), skyrocketed it from 3M to 100M monthly (Byjus, Toppr, 1mg), and sustained it at 100M and above (WebMD)."}
              link={"/Icons/rocket.png"}
            />
            <Service
              header={"Conversion Rate Sorcery"}
              information={"Our AI-driven enchantments have conjured average traffic-to-lead conversion rates of 1.5% in edtech and 3% in healthtech."}
              link={"/Icons/conversion.png"}
            />
            <Service
              header={"Data as a Service"}
              information={"We provide Data annotation and preparation Services to help improve the quality of the data "}
              link={"/Icons/data.png"}
            />
          </div>
        </div>
      </Parallax>
    </div>
  )
}
