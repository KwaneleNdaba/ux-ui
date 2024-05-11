import Image from "next/image";
import React from "react";
import { ServiceCard } from "./Services/ServiceCard";

export const Services = () => {
  return (
    <div className="flex justify-center text-center backgound-color py-20 ">
      <ServiceCard serviceName="residential"/>
      <ServiceCard  serviceName="commercial"/>
      <ServiceCard  serviceName="maintance" style="border-none"/>
    </div>
  );
};
