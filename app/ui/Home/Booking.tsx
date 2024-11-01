"use client";
import { TbBrandBooking } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";
import { RiFolderReceivedFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import TitleAnimate from '@/components/ui/TitleAnimate';
import Content from '@/components/ui/Content';
export default function Booking() {
  return (
    <section className="wrapper px-5 ">
      <header className="container  mx-auto">
        <TitleAnimate>
        <h3 className="text-4xl  py-2 text-center font-mulish text-white">
          Experience a seamless journey from <br /> booking to receiving your
          stunning <br />
          photographs.
        </h3>
        </TitleAnimate>
      
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-10">
        <div className="flex flex-col space-y-3 text-center">
          <nav className="flex justify-center items-center">
            <TbBrandBooking className="text-3xl text-center text-primary " />
          </nav>

         <Content>
          <h4 className="text-xl text-gray-300">
            Our Simple process ensures you receive your photos effortlessly and
            on time.
          </h4>
          <p className="text-[1rem] text-gray-200">
            From your initial booking to the final devilery. We prioritize your
            satisfaction
          </p>
          <nav className="flex items-center justify-center gap-2 text-gray-100">
            Book{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </nav>
          </Content>
        </div>
        <div className="flex flex-col space-y-3 text-center">
          <nav className="flex justify-center items-center">
            <IoIosConstruct className="text-3xl text-center text-primary" />
          </nav>
          <Content>
          <h4 className="text-xl text-gray-300">
            Enjoy personalized consultations to tailor your photography
            experience to your needs.
          </h4>
          <p className="text-[1rem] text-gray-200">
            Our team works closely with you to understand your vision and
            preferences.
          </p>
          <nav className="flex items-center justify-center gap-2 text-gray-100">
            Consult{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </nav>
          </Content>
        </div>

        <div className="flex flex-col space-y-3 text-center">
          <nav className="flex justify-center items-center">
            <RiFolderReceivedFill className="text-3xl text-center text-primary" />
          </nav>
           <Content>
          <h4 className="text-xl text-gray-300">
            Receive your beautiful edited photographs delivered directly to your
            inbox
          </h4>
          <p className="text-[1rem] text-gray-200">
            We ensure timly delivery so you can receive your precious moments
            quickly
          </p>
          <nav className="flex items-center justify-center gap-2 text-gray-100">
            Receive{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </nav>
          </Content>
        </div>
      </section>
    </section>
  );
}
