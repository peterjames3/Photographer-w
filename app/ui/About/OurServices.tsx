"use client";
import Skills from "@/app/ui/Skills";
import WhyChooseUs from "@/app/ui/WhyChooseUs";
import MyServices from "@/app/ui/MyServices";

export default function OurServices() {
  return (
    <section className="bg-cardBg w-full py-10 ">
      <div className="wrapper flex flex-wrap">
        <Skills />
        <WhyChooseUs />
        <MyServices />
      </div>
    </section>
  );
}
