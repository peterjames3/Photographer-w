'use client';
import { useState } from "react";
import Link from "next/link";
import Mobile from "@/app/ui/Mobile";
import NavLinks from '@/app/ui/NavLinks'
import {
  FaInstagram,
  FaFacebook,
  BsTwitterX,
  MdOutlineMailLock,
  FaPhoneAlt,
  FaCameraRetro,
  FaBars,
  FaTimes,
} from "@/app/ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mt-0 mx-auto fixed top-0 z-50 py-4 px-5">
      {/* Contact information section */}
      <section className="hidden sm:flex items-center justify-between max-w-[70rem] py-3 mt-0 mx-auto">
        <address className="not-italic flex items-center gap-6 text-xl">
          <div className="flex gap-2 items-center text-white">
            <MdOutlineMailLock />
            <a href="mailto:hanzo@gmail.com">hanzo@gmail.com</a>
          </div>
          <div className="flex gap-2 items-center text-white">
            <FaPhoneAlt />
            <a href="tel:+254768283966">0768283966</a>
          </div>
        </address>
        {/* Social media links */}
        <nav aria-label="Social Media Links" className="flex text-2xl gap-5 text-white">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </Link>
        </nav>
      </section>
      <hr className="hidden sm:flex" />
      <section className="max-w-[70rem] mx-auto flex justify-between items-center">
        <nav aria-label="Main Navigation">
          <Link className="flex gap-2 text-2xl items-center text-white" href="/">
            <FaCameraRetro className="text-2xl text-[#ab5d00]" /> Photography
          </Link>
        </nav>
        <nav className="hidden sm:flex">
          {/* Desktop navigation links (if any) */}
          <NavLinks/>
        </nav>
        <div className="sm:hidden flex items-center">
          {/* Toggle sidebar */}
          <button type='button' onClick={() => setIsOpen(!isOpen)}>
            {
              isOpen? (
                <FaTimes className="text-white text-2xl" />
                
              ) : (
                <FaBars className="text-white text-2xl" />
              )
            }
           
          </button>
        </div>
      </section>
      {/* Sidebar for mobile view */}
      {isOpen && <Mobile isOpen={isOpen} toggleOpen={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
