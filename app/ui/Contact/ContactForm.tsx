"use client";
import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import useToast from "@/app/ui/useToast";
const validate = (value: any) => {
  const errors: any = {};

  if (!value.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(value.name)) {
    errors.name = "Name should only contain letters and spaces";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }

  if (!value.message) {
    errors.message = "Message is required";
  }
  return errors;
};
export default function ContactForm() {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
      console.log(
        "Template ID:",
        process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID
      );
      console.log("Public Key:", process.env.NEXT_PUBLIC_PUBLIC_KEY);

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_CONTACTUS_TEMPLATE_ID as string,
          values,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            notifySuccess(result.text);
            console.log("Success", result);
            setIsSubmitting(false);
            formik.resetForm();
          },
          (error) => {
            notifyError(error.text);
            console.log("Error", error);
            setIsSubmitting(false);
          }
        );
    },
  });
  return (
    <section className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-5 py-10">
      <div className="pt-12 border border-gray-900 px-4 flex flex-col space-y-6">
        <h3 className="text-white pb-1">Email Us</h3>
        <address className="text-gray-300 text-xl">
          <a href="mailto:kamauchief97@gmail.com">Hanzo@gmail.com</a>
          <br />
        </address>
        <h3 className="text-white pb-1">Phone Us</h3>
        <address className="text-gray-300  text-xl">
          <a href="tel:+254 768283966">+254 768283966</a>
          <br />
        </address>
        <h3 className="text-white pb-1">Visit Us</h3>
        <address className="text-gray-300 text-xl">
          121 King, Street Melbourne Victoria <br />
          3000, Kenya
        </address>
      </div>
      <div>
        <h4 className="py-3 text-center text-3xl font-semibold text-white transition-all delay-300 hover:underline">
          Contact Me
        </h4>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto max-w-md space-y-10 p-1"
        >
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              {formik.touched.name && formik.errors.name ? (
                <p className="text-sm text-red-500">{formik.errors.name}</p>
              ) : null}
            </div>

            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="focus:border-brandC mt-1 block w-full rounded-md border border-gray-300 px-2 py-3 shadow-sm focus:ring-faitPrimary"
            />
          </div>
          {/* Email Field */}
          <div>
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

            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="focus:ring-brandC mt-1 block w-full rounded-md px-2 py-3 shadow-sm focus:border-faitPrimary"
            />
          </div>

          {/* Message Field */}

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              {formik.touched.message && formik.errors.message ? (
                <p className="text-sm text-red-500">{formik.errors.message}</p>
              ) : null}
            </div>

            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="focus:border-brandC focus:ring-brandC mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            value="Send"
            className={`w-full cursor-pointer rounded-md bg-primary hover:bg-secondary p-4 text-xl font-semibold text-black transition-all delay-300 ${
              isSubmitting ? "bg-secondary" : "bg-primary"
            } hover:bg-brandD`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}
