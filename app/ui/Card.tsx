// Card.tsx
"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

interface CardItem {
  image: string;
  title: string;
  heading: string;
  description: string;
}

interface CardProps {
  items: CardItem[];
}

export default function Card({ items }: CardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[350px] shadow-md overflow-hidden rounded-md group cursor-pointer transition-transform transform hover:scale-[1.05]"
        >
          {/* Icons */}
          <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
            <FaRegHeart className="text-[1.1rem] text-gray-600" />
            <div className="flex items-center gap-[5px]">
              <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
              <p className="text-[1rem] text-orange-700">5 min</p>
            </div>
          </div>

          {/* Image */}
          <Image
            src={item.image}
            alt={`image-${index}`}
            priority={true}
            fill={true}
            style={{objectFit:'cover'}}
            className="group-hover:opacity-40 transition-opacity duration-300 ease-out"
          />

          {/* Texts */}
          <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full bg-gradient-to-t from-black to-transparent">
            <p className="text-[1rem] uppercase text-gray-300">{item.title}</p>
            <h3 className="text-[1.4rem] font-bold text-white">
              {item.heading}
            </h3>
            <p className="text-[0.9rem] text-gray-400 mt-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
