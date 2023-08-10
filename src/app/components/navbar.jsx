// import React from "react";
// import Image from "next/image";

// export default function Nav() {
//   return (
//     <nav className="flex flex-col lg:flex-row items-center justify-between bg-[#f3f4f6] py-4 px-8">
//       <a href="https://www.getfreebird.app/" target="_blank" rel="noopener noreferrer">
//         <Image src='/assets/freebird.jpg' height='50' width='50' alt="Image" />
//       </a>
//       <div className="text-2xl lg:text-3xl font-semibold text-[#40ccb3] my-4 lg:my-0">
//         Product EMI Calculator
//       </div>
//       <div></div> 
//     </nav>
//   );
// }
import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between space-x-10 bg-[#f3f4f6] py-4 px-8">
      <a href="https://www.getfreebird.app/" target="_blank" rel="noopener noreferrer">
        <Image src='/assets/freebird.jpg' height='50' width='50' alt="Image" />
      </a>
      <div className="text-2xl font-semibold text-[#40ccb3]">Product EMI Calculator</div>
      <div></div> 
    </nav>
  );
}
