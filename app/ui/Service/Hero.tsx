"use client";
import Image from "next/image";
import Content from '@/components/ui/Content';
export default function Hero() {
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

      <div className="sm:max-w-[60rem] w-full px-5 sm:px-0 absolute text-white top-1/2 left-[50%] transition -translate-x-[50%] -translate-y-[50%]">
        {" "}
      <Content>
        <h2 className=" text-4xl uppercase pb-4">Service</h2>
        <h3>
          Telling stories through images that are both beautiful and meaningful
          and convey a message that can be seen
        </h3>
        </Content>
      </div>
    </header>
  );
}
