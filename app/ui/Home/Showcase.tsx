"use client";
import Image from "next/image";
import TitleAnimate from '@/components/ui/TitleAnimate';

export default function showcase() {
  return (
    <section className="wrapper my-10 min-h-[10rem]">
      <header>
        <TitleAnimate>
        <h2 className="text-3xl px-5 sm:px-0">Photo Showcase</h2>
        </TitleAnimate>
     
        <p>Explore stunning visual across categories.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10 min-h-[10rem]">
        <div className="col-span-2 h-[410px]">
          <Image
            src="/natures-beauty-shines-multi-colored-floral-decoration-generative-ai.jpg"
            className="object-cover h-full w-full"
            alt="image"
            height={500}
            width={800}
          />
        </div>

        <div className="col-span-1 bg-gray-200 h-[410px]">
          <Image
            src="/professional-young-photographer-taking-photos-indian-model-studio-with-leight.jpg"
            className="object-cover h-full w-full"
            alt="image"
            height={500}
            width={800}
          />
        </div>

        <div className=" col-span-1 h-[410px]">
          <Image
            src="/photographer-capturing-photos-world-photography-day-war-zone-conflict-area.jpg"
            className="object-cover h-full w-full"
            alt="image"
            height={500}
            width={800}
          />
        </div>

        <div className="col-span-2 h-[410px]">
          <Image
            src="/side-view-photographer-holding-camera.jpg"
            className="object-contain h-full w-full"
            alt="image"
            height={500}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}
