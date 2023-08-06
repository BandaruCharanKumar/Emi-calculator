import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-[#f3f4f6] py-4 px-8">
      <a href="https://www.getfreebird.app/" target="_blank" rel="noopener noreferrer">
        <Image src='/assets/freebird.jpg' height='50' width='50' alt="Image" />
      </a>
      <div className="text-3xl font-semibold text-[#40ccb3]">Production Emi Calculator</div>
      <div></div> 
    </nav>
  );
}

