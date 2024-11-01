// Card.tsx
"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

interface CardItem {
  image: string;
  title: string;
}

interface CardProps {
  items: CardItem[];
}

export default function Card({ items }: CardProps) {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[650px] shadow-md overflow-hidden rounded-md group cursor-pointer transition-transform transform hover:scale-[1.05]"
        >
          {/* Icons */}
          <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
            <FaRegHeart className="text-[1.1rem] text-gray-600" />
          </div>

          {/* Image */}
          <Image
            src={item.image}
            alt={`image-${index}`}
            priority={true}
            fill={true}
            style={{ objectFit: "cover" }}
            className="group-hover:opacity-40 transition-opacity duration-300 ease-out"
          />
        </div>
      ))}
    </div>
  );
}
