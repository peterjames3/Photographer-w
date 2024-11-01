"use client";
import { FaMobileAlt, FaInfinity, FaShareAlt } from "react-icons/fa";
import Reveal from '@/components/ui/Reveal'

export default function Features() {
  return (
    <section className="py-24 bg-cardBg">
      <div className="wrapper ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
          {/* First Feature - 100% Responsive */}
          
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-5xl text-gray-200" />
            <Reveal position='left'>
            <h3 className="mt-4 text-2xl font-medium text-white">
              100% Responsive
            </h3>
            </Reveal>
            <p className="mt-2 text-gray-400 font-medium">
              No matter which the device you &Apos;re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
      
          
          {/* Second Feature - No Photo Upload Limit */}
          <div className="flex flex-col items-center">
            <FaInfinity className="text-5xl text-gray-200" />
            <Reveal position='center'>
            <h3 className="mt-4 text-2xl text-white font-medium font-mulish">
             Unlimited Upload 
            </h3>
            </Reveal>
            <p className="mt-2 text-gray-400 font-medium">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
       
          
          
          {/* Third Feature - Available to Embed */}
          <div className="flex flex-col items-center">
            <FaShareAlt className="text-5xl text-gray-200" />
            <Reveal position='right'>
            <h3 className="mt-4 text-2xl font-medium text-white">
              Available to Embed
            </h3>
            </Reveal>
            <p className="mt-2 text-gray-400 font-medium">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
