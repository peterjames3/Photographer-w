'use client';
import Link from 'next/link';
import { HiFaceFrown } from "react-icons/hi2";
export default function NotFound(){
    return(
        <main className="flex h-full flex-col items-center justify-center gap-2">
      <HiFaceFrown  className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested Page.</p>
      <Link
        href="/"
        className="mt-4 btn"
      >
        Go Back
      </Link>
    </main>
    )
}