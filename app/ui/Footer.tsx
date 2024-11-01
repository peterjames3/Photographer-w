"use client";
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { FaCameraRetro } from "react-icons/fa";
import { ReactNode } from "react";
import useToast from "@/app/ui/useToast";
import emailjs , { EmailJSResponseStatus } from "@emailjs/browser";
import { useFormik, FormikErrors } from "formik";
import { useState } from "react";

interface RevealProps {
  children: ReactNode;
}
interface FormValues {
  email:string;
}


const validate = (value: FormValues): FormikErrors<FormValues> => {
  const errors:FormikErrors<FormValues> = {};
  if (!value.email) {
    errors.email = "Required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }
  return errors;
};

const Reveal: React.FC<RevealProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const year = new Date().getFullYear();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string,
          values,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )
        .then(
          (result: EmailJSResponseStatus) => {
            notifySuccess(result.text);

            setIsSubmitting(false);
            formik.resetForm();
          },
          (error: {text: string}) => {
            notifyError(error.text);

            setIsSubmitting(false);
          }
        );
    },
  });

  return (
    <footer className="bg-black py-12 border-t border-gray-700">
      <div className="wrapper grid grid-cols-1 md:grid-cols-4 gap-16 px-4 text-gray-200">
        {/* Logo and Newsletter Section */}
        <div className="flex flex-col justify-center sm:items-start">
          <Link href="/" className="flex items-center gap-2 text-2xl">
            <FaCameraRetro className="text-3xl text-primary" />
            <span className="font-bold text-white">Photography</span>
          </Link>
          <p className="mt-4">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="mt-1 flex gap-2 items-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email here"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="bg-cardBg border border-gray-600 text-gray-200 rounded px-3 py-1 "
              />
              <button
                arial-label="Join"
                value="Join"
                type="submit"
                disabled={isSubmitting}
                className={`bg-primary text-black px-4 py-1 rounded hover:bg-secondary ${
                  isSubmitting ? "bg-primary " : "bg-secondary"
                }`}
              >
                {isSubmitting ? "Join..." : "Join"}
              </button>
            </div>
            <ToastContainer />
          </form>
          <p className="mt-2 text-sm text-gray-300">
            By subscribing, you accept our Privacy Policy and consent to receive
            updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-yellow-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faqs" className="hover:text-yellow-400">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-yellow-400">
                Support
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-yellow-400">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-yellow-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-yellow-400">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Stay Connected</h3>
          <div className="flex gap-4">
            <Reveal>
              <Link
                href="https://facebook.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiFacebookFill size="24" className="text-yellow-400" />
              </Link>
            </Reveal>
            <Reveal>
              <Link
                href="https://instagram.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiInstagramFill size="24" className="text-yellow-400" />
              </Link>
            </Reveal>
            <Reveal>
              <Link
                href="https://twitter.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiTwitterFill size="24" className="text-yellow-400" />
              </Link>
            </Reveal>
            <Reveal>
              <Link
                href="https://linkedin.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiLinkedinFill size="24" className="text-yellow-400" />
              </Link>
            </Reveal>
            <Reveal>
              <Link
                href="https://youtube.com"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              >
                <RiYoutubeFill size="24" className="text-yellow-400" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {year} Photography. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-6">
          <Link href="/privacy-policy" className="hover:text-yellow-400">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-yellow-400">
            Terms of Service
          </Link>
          <Link href="/cookie-settings" className="hover:text-yellow-400">
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
