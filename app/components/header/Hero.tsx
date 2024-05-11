import Image from 'next/image'
import React from 'react'
import image10 from "../../assets/image10.png"
import image9 from "../../assets/image9.png"
export const Hero = () => {
  return (
    <div className='flex  px-40 mt-10 space-x-40 w-full'>
        <div className="flex justify-center flex-col font-sans items-start space-y-2 mt-20 ">
            <h1 className='capitalize text-4xl font-bold whitespace-nowrap'>call us for any</h1>
            <h2 className='uppercase text-4xl font-semibold whitespace-nowrap'>pumbling needs</h2>
            <p className='font-bold text-2xl'>+1800-9938-2839</p>
            <button className='capitalize shadow-xl  px-3 py-1 hover:animate-bounce text-white rounded-xl backgound-color '>
                see all services
            </button>
        </div>
        <div className='flex space-x-5 '>
            <Image src = {image10} width={400} height = {100} className='object-contain' alt = "image-10"/>
            <Image src = {image9} width={450} height = {100} className='object-contain' alt = "image-10"/>
        </div>
    </div>
  )
}
