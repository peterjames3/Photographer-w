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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-primary p-3 text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {/* Testimonial 1 */}
           
            <div className="keen-slider__slide">
              <blockquote className="font-Lato flex h-full flex-col justify-between bg-cardBg p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-white">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-mulish text-xl font-bold text-textColor sm:text-2xl text-gray-300">
                      &apos;Incredible Moments Captured&apos;
                    </h3>
                    <Content>
                    <p className="font-mulish mt-4 text-gray-400">
                      &apos;The photographer truly captured the essence of our
                      special day. Each photo tells a beautiful story!&apos;
                    </p>
                    </Content>
                  </div>
                </div>
               
                <footer className="font-mulish mt-8 text-sm text-secondary">
                  &mdash; Emily Taylor, Bride
                </footer>
              </blockquote>
            </div>
          
          

            {/* Testimonial 2 */}
      
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-cardBg p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-white">
                    {/* SVG stars omitted for brevity */}
                  </div>
               
                  <div className="font-Lato mt-4">
                  <Content>
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl text-gray-300">
                      &apos;Professional and Talented&apos;
                    </h3>
                    <p className="mt-4 text-gray-400 font-mulish">
                      &apos;Working with this photography team was a delight.
                      They were professional and made everyone feel at
                      ease!&apos;
                    </p>
                    </Content>
                  </div>
                  
                </div>
                <footer className="font-Lato mt-8 text-sm text-secondary">
                  &mdash; Mark Johnson, Corporate Client
                </footer>
              </blockquote>
            </div>
           

            {/* Testimonial 3 */}
           
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-cardBg p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                  <Content>
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl text-gray-300">
                      &apos;Magical Family Portraits&apos;
                    </h3>
                    <p className="mt-4 text-gray-400 font-mulish">
                      &apos;We couldn&apos;t be happier with our family
                      portraits. The photos are stunning, and we cherish
                      them!&apos;
                    </p>
                    </Content>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-sm text-secondary">
                  &mdash; Sarah Lee, Family Client
                </footer>
              </blockquote>
            </div>
         

            {/* Testimonial 4 */}
            
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-cardBg p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                  <Content>
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl text-gray-300">
                      &apos;Exceptional Event Coverage&apos;
                    </h3>
                    <p className="mt-4 text-gray-400 font-mulish">
                      &apos;Our event was covered beautifully. The photographer
                      was everywhere capturing every detail without being
                      intrusive!&apos;
                    </p>
                    </Content>
                  </div>
                </div>
                <footer className="font-mulish mt-8 text-sm text-secondary">
                  &mdash; Olivia Brown, Event Planner
                </footer>
              </blockquote>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
