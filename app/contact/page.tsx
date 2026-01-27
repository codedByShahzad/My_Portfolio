"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending">("idle");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mr.shahzad.developer@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again!");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 my-10">
      {/* Heading */}
      <div className="mb-16">
        <div className="flex   gap-2 mt-5">
                 <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
                              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                              <p className="relative z-10 text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                                Resume
                              </p>
                            </div>
              </div>
        
              {/* Heading */}
              <h1 className="mt-4 text-4xl font-semibold font-serif md:text-5xl text-white">
                Let's get{" "}
                <span className="bg-linear-to-r from-primary via-indigo-500 to-pink-500 bg-clip-text italic text-transparent">
                  in touch
                </span>
              </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FiPhone className="text-primary text-xl" />
            <p>+92 341 5278601</p>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-primary text-xl" />
            <p>mr.shahzad.developer@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-primary text-xl" />
            <p>Rawalpindi, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 resize-none bg-transparent border-b border-gray-700 py-2 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-white cursor-pointer hover:bg-[#603df9] px-6 py-3 font-semibold "
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
};

export default Page;
