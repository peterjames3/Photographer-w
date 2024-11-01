"use client";
import Image from "next/image";
import BookingBtn from "@/app/ui/BookingBtn";
import TitleAnimate from '@/components/ui/TitleAnimate'
export default function Capture() {
  return (
    <section className="w-full my-2 relative min-h-[15rem] bg-gradient-to-r from-gray-800 to-gray-600 ">
      <Image
        src="/beautiful-model-posing-with-colorful-powder.jpg"
        priority={true}
        fill={true}
        style={{ objectFit: "cover" }}
        className="mix-blend-overlay"
        alt="best moments"
      />
      <div className="absolute top-[40%] left-[40%] transition -translate-x-[50%] -translate-y-[50%] space-y-3">
        <TitleAnimate>
        <h3 className="text-3xl text-white">Capture Your Moments Today</h3>
        </TitleAnimate>
        <p className="text-xl text-gray-300">
          React to elevate your photography experience? Book a session or reac
          out for details!
        </p>
        <nav className="pt-3">
          <BookingBtn />
        </nav>
      </div>
    </section>
  );
}
