"use client";
import Image from "next/image";
import TitleAnimate from '@/components/ui/TitleAnimate';
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineHighQuality } from "react-icons/md";
import { SiQualys } from "react-icons/si";
import Button from "@/app/ui/Button";
import Content from '@/components/ui/Content'
import Reveal from '@/components/ui/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function WhyUs() {
  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };
  
  const item = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  return (
    <section className="w-full bg-cardBg px-5 mt-10 py-2 text-gray-300">
      <div className="wrapper flex flex-col sm:flex-row">
        <div className="sm:w-1/2 px-2 space-y-2">
          <header className="pt-6">
            <TitleAnimate>
            <h2 className="text-3xl text-white">Excellence</h2>
            </TitleAnimate>
            <h3 className="text-2xl py-2">
              Why Choose Our Photography Services?
            </h3>
            <p>
              With years of experience, we deliver stunning visuals that
              resonate. Our commitment to quality ensures your memories are
              captured beautifully.
            </p>
          </header>
          <div className="flex gap-5 pt-4 sm:pt-7">
            <article className="flex flex-col items-start">
              <RiGlobalLine className="text-3xl text-orange-500" />
              <h4 className="text-xl font-mulish">Global Reach</h4>
              <Content>
              <p className="text-[0.99rem]">
                We cater to clients worldwide, ensuring your vision is realized
                no matter the location.
              </p>
              </Content>
            </article>
            <article className="flex flex-col items-start">
              <MdOutlineHighQuality className="text-3xl text-orange-500" />
              <h4 className="text-xl font-cormorant">Unmatched Quality</h4>
              <Content>
              <p className="text-[0.99rem]">
                Our attention to detail guarantees high-quality images that
                exceed your expectations.
              </p>
              </Content>
            
            </article>
          </div>
          <article>
          <SiQualys  className="text-3xl text-orange-500" />
          <h4 className="text-xl font-cormorant">Qualities</h4>
          <motion.ul ref={ref} initial='hidden' animate={isInView ? 'visible':'hidden'} variants={list} className='flex flex-col space-y-2 text-[0.99rem]'>
            <motion.li variants={item}>Professionalism</motion.li>
            <motion.li variants={item}>Work Ethics</motion.li>
            <motion.li variants={item}>Timely Delivery</motion.li>
          </motion.ul>
          </article>
          <footer className="pt-3">
            <Button />
          </footer>
        </div>
        
        <aside className="sm:w-1/2 flex justify-center mt-4 sm:mt-0">
          <Image
            src="/woman-with-flowers-her-mask-posing-with-hat.jpg"
            width={600}
            height={300}
            alt="A woman with flowers, wearing a mask and posing with a hat"
            className="hidden sm:flex"
          />
          <Image
            src="/woman-with-flowers-her-mask-posing-with-hat.jpg"
            width={600}
            height={500}
            alt="A woman with flowers, wearing a mask and posing with a hat"
            className="flex sm:hidden"
          />
        </aside>
   
      </div>
    </section>
  );
}
