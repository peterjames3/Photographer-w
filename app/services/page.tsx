"use client";
import Hero from "@/app/ui/Service/Hero";
import ServicesImage from "@/app/ui/Service/ServicesImage";
import ServiceDetails from "@/app/ui/Service/ServiceDetails";
import PortraitServices from '@/app/ui/Service/PortraitServices';
export default function Services() {
  return (
    <>
      <Hero />
      <ServicesImage />
      <ServiceDetails />
      <PortraitServices />
    </>
  );
}
