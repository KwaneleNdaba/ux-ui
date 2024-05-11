import Image from 'next/image'
import React from 'react'
import service from "../../../assets/service.png";

export const ServiceCard = ({style, serviceName}:any) => {
  return (
    <div className={`flex flex-col justify-center font-sans space-x-4 border-r-2 pr-4 ${style}`}>
    <div className="">
      <Image src={service} alt="service" width={100} className="bg-transparent m-auto"/>
      <p className='capitalize font-bold'>{serviceName} service</p>
    </div>
    <div className="">
      <p className='text-sm max-w-xs text-white '> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        architecto tenetur officia, animi quaerat veniam odit ad itaque
        incidunt aperiam non ab eligendi dolorem corrupti, quis nemo
        exercitationem quo vero.
      </p>
      <button className='bg-white rounded-md w-1/2 capitalize mt-1 font-semibold underline'>learn more</button>
    </div>
  </div>
  )
}
