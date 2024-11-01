"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Content from '@/components/ui/Content'
import TitleAnimate from "@/components/ui/TitleAnimate";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ServiceDetails() {
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
    <section className="wrapper px-6 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Side - Text Section */}
        <div>
          <TitleAnimate>
          <h2 className="text-3xl font-bold text-white">
            About Portrait Photography Services
          </h2>
          </TitleAnimate>
          <div className="mt-4 flex items-start">
            {/* Icon or Placeholder */}
            <div className="mr-4 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
                L
              </div>
            </div>
            {/* Description */}
            <Content>
            <p className="text-gray-200 text-xl">
              We offer a variety of portrait photography services, focusing on
              capturing genuine moments in natural and urban settings. Whether
              you are looking for individual portraits, family shoots, or
              professional headshots, I ensure every image tells a unique story.
            </p>
            </Content>
          </div>
          <Content>
          <p className="mt-4 text-gray-100">
            With an eye for detail and a passion for storytelling through
            photography, I work with each client to create customized shoots
            that fit their style and needs. I specialize in creating vibrant,
            natural photos that emphasize personality and emotion. My goal is to
            provide not just photographs, but memories that last.
          </p>
          </Content>
        </div>

        {/* Right Side - Services List */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-300">
            Services Include:
          </h3>
          <p className="mt-2 text-gray-100">
            My photography services cover a broad range of options to meet your
            specific needs. Each package is tailored to provide high-quality
            results in various settings.
          </p>
          <motion.ul ref={ref} variants={list} initial='hidden' animate={isInView ? 'visible': 'hidden'}  className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Outdoor Portrait Sessions</span>
            </motion.li>
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Indoor Studio Shoots</span>
            </motion.li>
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Professional Headshots</span>
            </motion.li>
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Event Coverage</span>
            </motion.li>
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Family & Group Portraits</span>
            </motion.li>
            <motion.li variants={item} className="flex items-start">
              <FaCheckCircle className="text-secondary mr-2 mt-1" />
              <span className="text-gray-200">Creative Concept Shoots</span>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {/* Images Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Image
          src="/african-american-man-with-face-painting.jpg"
          alt="Outdoor Portrait"
          width={600}
          height={200}
          className="w-full rounded-lg shadow-md"
        />
        <Image
          src="/portrait-young-handsome-man.jpg"
          alt="Urban Portrait"
          width={600}
          height={200}
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
