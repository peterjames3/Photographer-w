import { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import Content from '@/components/ui/Content';

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const previousRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const prevHandler = () => slider.prev();
      const nextHandler = () => slider.next();

      if (previousRef.current) {
        previousRef.current.addEventListener("click", prevHandler);
      }

      if (nextRef.current) {
        nextRef.current.addEventListener("click", nextHandler);
      }

      return () => {
        if (previousRef.current) {
          previousRef.current.removeEventListener("click", prevHandler);
        }
        if (nextRef.current) {
          nextRef.current.removeEventListener("click", nextHandler);
        }
        slider.destroy();
      };
    }
  }, []);

  return (
    <section id="testimonials" className="my-10 py-[1rem] bg-cardBg">
      <div className="wrapper px-5 sm:px-6 lg:py-8 lg:pe-0 lg:ps-8 xl:py-10">
        <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h5 className="font-body max-w-xl text-5xl font-bold tracking-tight text-white sm:text-5xl">
            What Our Clients Say About Our Photography Services
          </h5>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={previousRef}
              className="rounded-full border border-primary p-3 text-white"
            >
              {/* SVG Icon */}
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-primary p-3 text-white"
            >
              {/* SVG Icon */}
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {/* Testimonials content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
