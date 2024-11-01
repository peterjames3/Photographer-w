"use client";
import Image from "next/image";
export default function ConctactHero() {
  return (
    <header className=" relative w-full min-h-[30rem] flex items-center gap-10 bg-gradient-to-r from-gray-600 to-gray-900">
      <div className="">
        <Image
          src="/young-adults-hiking-mountain-peak-photographing-nature-generated-by-ai.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
          className="object-fill mix-blend-overlay"
          alt="Photographer exploring an abandoned location"
        />
      </div>

      {/* Subheading */}

      <div className="wrapper absolute text-white top-1/2 left-[45%] transition -translate-x-[50%] -translate-y-[50%]">
        {" "}
        <h2 className=" text-3xl">
             Let&apos;s Capture Your Next Big Moment!
        </h2>
      </div>
    </header>
  );
}
