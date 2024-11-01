import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <Link
      href={"/about"}
      className="px-10 py-3 rounded-md text-white font-medium hover:cursor-pointer bg-[#ab5d00] hover:bg-[#e07b00] transition-all delay-300 "
    >
      Learn More
    </Link>
  );
};

export default Button;
