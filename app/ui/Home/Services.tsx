"use client";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import Card from "@/app/ui/Card";
import Images from "next/image";
import TitleAnimate from '@/components/ui/TitleAnimate'

const items = [
  {
    image: "/side-view-photographer-holding-camera.jpg",
    title: "Wedding Photography",
    heading: "That Tells Your Love Story",
    description:
      "Capture every moment of your special day with our expert wedding photography.",
  },
  {
    image: "/model-posing-with-yellow-blue-powder-medium-shot.jpg",
    title: "Event Photography",
    heading: "Memories That Last",
    description:
      "We capture the essence of your events, ensuring no moment goes unnoticed.",
  },
  {
    image: "/woman-with-flowers-her-mask-posing-with-hat.jpg",
    title: "Portrait Photography",
    heading: "Showcase Your Personality",
    description:
      "Our portrait sessions bring out your unique character and charm.",
  },
  {
    image: "/front-view-women-working-together.jpg",
    title: "Corporate Photography",
    heading: "Professional Images That Impress",
    description:
      "Enhance your brand with our professional corporate photography services.",
  },
];
export default function Services() {
  return (
    <section className="max-w-[70rem] mt-7 mx-auto py-2 px-5 sm:px-0">
      <div className="flex flex-col items-start space-y-4 py-3">
        <TitleAnimate>
        <h2 className="text-2xl text-white font-mulish tracking-wider font-semibold">
          Capture
        </h2>
        </TitleAnimate>
        <h3 className="text-3xl text-gray-300">Explore Our Diverse Photography Services</h3>
        <p className="text-xl text-gray-200">
          Our photography services cater to all your needs, from weddings to
          commercial projects. We strive to create stunning <br></br>visuals
          that tell your unique story.
        </p>
      </div>

      <div>
        <Card items={items} />
      </div>
    </section>
  );
}
