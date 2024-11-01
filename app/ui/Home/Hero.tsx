"use client";
import Image from "next/image";
import Button from "@/app/ui/Button";
export default function Hero() {
  return (
    <div className=" relative w-full h-screen sm:min-h-[40rem] flex items-center gap-10 bg-gradient-to-r from-gray-600 to-gray-900">
      <div className="">
        <Image
          src="/photographer-exploring-abandoned-location.jpg" 
          fill={true}
          style={{ objectFit:'cover' }}
          priority={true}
          className="object-fill mix-blend-overlay"
          alt="Photographer exploring an abandoned location"
        />
      </div>

      <div className="absolute top-[50%] left-1/2 sm:text-center transition -translate-x-1/2 -translate-y-1/2  w-full sm:max-w-[70rem] px-5 sm:px-0 ">
        <h1 className="text-white text-6xl pb-5 sm:pb-2">
          Some Moments Express Soulful Emotions
        </h1>
        <p className="text-white mt-4 text-3xl font-mulish pb-2">
          Discover the hidden gems in your heart, and let your soul soar! Every
          moment captured tells a story.
        </p>
        <nav className="mt-6">
          {" "}
          <Button />
        </nav>
      </div>
    </div>
  );
}
