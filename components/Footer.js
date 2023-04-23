import React from 'react'
import Parallax from './Parallax'

export const Footer = () => {
    return (
        <div>
            <div className="bg-[#031B34]">
                <div className="text-5xl md:text-2xl text-center pt-10 pb-8 md:pb-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                    Let's discuss how to make<br/> your products intelligent
                </div>
                <div className="text-l md:text-sm md:p-4 text-center pb-10 text-[#81AFDD]">
                    With experience from 200+ production-grade implementations, we help you master the latest AI techniques and end-to-end implementation.
                </div>
                <div className="m-auto w-64 md:w-48 text-center md:mt-8 p-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <div className="bg-[#031B34] p-2 md:text-sm rounded-xl md:text-sm">
                        Talk to an Expert
                    </div>
                </div>
                <div className="mt-20 flex flex-wrap justify-around pb-8">
                    <div className='text-3xl font-bold md:text-2xl'>GrowthFarm</div>
                    <div className='md:px-8 md:mb-8'>
                        <ul>
                            <li className="font-bold text-2xl pb-8 md:text-xl md:pb-4">Links</li>
                            <li className="py-2 text-l md:text-sm">Overons</li>
                            <li className="py-2 text-l md:text-sm">Social Media</li>
                            <li className="py-2 text-l md:text-sm">Counters</li>
                            <li className="py-2 text-l md:text-sm">Contact</li>
                        </ul>
                    </div>
                    <div className='md:px-8 md:mb-8'>
                        <ul>
                            <li className="font-bold text-2xl pb-8 md:text-xl md:pb-4">Company</li>
                            <li className="py-2 text-l md:text-sm">Terms & Conditions</li>
                            <li className="py-2 text-l md:text-sm">Privacy Policy</li>
                            <li className="py-2 text-l md:text-sm">Contact</li>
                        </ul>
                    </div >
                    <div className='md:px-8 md:mb-8'>
                        <ul>
                            <li className="font-bold text-2xl pb-8 md:text-xl md:pb-4">Get in touch</li>
                            <li className="py-2 text-l md:text-sm">Crecherwoord k12 182</li>
                            <li className="py-2 text-l md:text-sm">085-132567</li>
                            <li className="py-2 text-l md:text-sm">info@payme.net</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
