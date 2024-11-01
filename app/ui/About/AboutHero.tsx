"use client";
import Image from "next/image";
import Reveal from "@/app/ui/Reveal";
export default function AboutHero() {
  return (
    <header className=" min-h-[35rem] relative w-full bg-gradient-to-r from-gray-700 to-gray-900">
      <Image
        src="/drone.jpg"
        priority={true}
        fill={true}
        style={{ objectFit: "cover" }}
        className="mix-blend-overlay"
        alt="about us image"
      />
      {/* Subheading */}

      <div className=" sm:max-w-[60rem] w-full  px-5 sm:px-0  absolute text-white top-1/2 left-[50%] transition -translate-x-[50%] -translate-y-[50%]">
        {" "}
        <Reveal>
        <h2 className=" text-3xl tracking-widest sm:tracking-wide sm:leading-normal leading-10 ">
          At JT Photography, we believe that every story deserves to be told
          through stunning, timeless images. Whether it &apos;s your wedding day, a
          family portrait.
        </h2>
        </Reveal>
      </div>
    </header>
  );
}
