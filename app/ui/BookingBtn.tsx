"use client";
import Link from "next/link";
export default function BookingBtn() {
  return (
    <Link
      href="/contact"
      className="px-10 py-3 rounded-md text-white font-medium hover:cursor-pointer bg-[#ab5d00] hover:bg-[#e07b00] transition-all delay-300 "
    >
      Book
    </Link>
  );
}
