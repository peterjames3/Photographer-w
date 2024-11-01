"use client";
import Hero from "@/app/ui/Home/Hero";
import Services from "@/app/ui/Home/Services";
import WhyUs from "@/app/ui/Home/WhyUs";
import Testimonials from "@/app/ui/Home/Testimonials";
import Booking from "@/app/ui/Home/Booking";
import Capture from "@/app/ui/Home/Capture";
import Showcase from "@/app/ui/Home/Showcase";
import Features from "@/app/ui/Home/Features";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <Services />
      <WhyUs />
      <Booking />
      <Testimonials />
      <Capture />
      <Showcase />
      <Features />
    </section>
  );
}
