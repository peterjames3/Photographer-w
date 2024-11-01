"use client";
import Image from "next/image";

import TitleAnimate from "@/components/ui/TitleAnimate";
export default function AboutPhotographer() {
  return (
    <section className="w-full bg-black ">
      <div className="wrapper  sm:flex gap-5 px-5 sm:px-7 py-16">
       
        <div className="sm:w-1/2">
          <Image
            src="/young-adults-hiking-mountain-peak-photographing-nature-generated-by-ai.jpg"
            alt="group photo"
            height={800}
            width={900}
          />
        </div>
        
        <div className=" sm:1/2 </section> px-4 sm:px-6 text-white ">
        <TitleAnimate>
        <h2 className="text-4xl font-bold">WHO IS BEHIND?</h2>
        </TitleAnimate>
          
          <p className="mt-4  leading-relaxed">
            <span className="text-primary font-semibold text-4xl">JT</span>{" "}
            photographer specializes in capturing moments that matter. From
            candid portraits to scenic landscapes, my goal is to bring stories
            to life through my lens.
          </p>
          <p className="mt-4  leading-relaxed">
            With over 5 years of experience, my passion for photography has
            taken me across the globe, capturing memories that last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
}
