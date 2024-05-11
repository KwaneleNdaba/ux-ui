import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-between px-40 py-2">
      <Image src={logo} width={150} className="object-contain" height={90} alt="logo" />
      <ul className="flex space-x-4 p-2 ">
        <li className="capitalize text-sm font-mono tracking-widest font-semibold active:underline hover:text-gray-400">
          home
        </li>
        <li className="capitalize text-sm font-mono tracking-widest font-semibold active:underline">
          about us
        </li>
        <li className="capitalize text-sm font-mono tracking-widest font-semibold active:underline">
          services
        </li>
        <li className="capitalize text-sm font-mono tracking-widest font-semibold active:underline">
          projects
        </li>
        <li className="capitalize text-sm font-mono tracking-widest font-semibold active:underline">
          blogs
        </li>
        <li className="capitalize transition duration-100 transform hover:scale-110 cursor-pointer  text-center -mt-1 font-mono text-white backgound-color rounded p-1 text-sm tracking-widest font-semibold active:underline">
          request a callback
        </li>
      </ul>
    </div>
  );
};
