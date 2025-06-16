"use client";
import { postContact } from "@/lib/contact";
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [description, setDescription] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      fullname === "" ||
      companyLocation === "" ||
      description === "" ||
      email === "" ||
      companyName === "" ||
      email === ""
    ) {
      setSubmitMessage("All Field Value must be entered");
    }

    if (agreeToTerms === false) {
      setSubmitMessage("Please agree the Terms");
    }

    try {
     
      const result = await postContact({fullname,companyLocation,companyName,email,contact,description,agreeToTerms});
      console.log(result);
      setSubmitMessage('Message Sucessfully Send')
      setFullname('')
      setEmail('')
      setCompanyLocation('')
      setAgreeToTerms(false)
      setCompanyName('')
      setContact('')
      setDescription('')
      setSubmitMessage('')
      
    } catch (err) {
      console.log(err);
    }
  };
  const social = [
    {
      id: 1,
      links: "",
      icon: (
        <FaFacebook
          size={25}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
    {
      id: 2,
      links: "",
      icon: (
        <FaLinkedin
          size={25}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
    {
      id: 3,
      links: "",
      icon: (
        <FaInstagram
          size={25}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
  ];

  const address = [
    {
      id: 1,
      title: "Naxal,Kathmandu",
      icon: (
        <FaLocationDot
          size={20}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
    {
      id: 2,
      title: "info@sumx.ai",
      icon: (
        <FaEnvelope
          size={20}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
    {
      id: 3,
      title: "Washington, D.C., USA",
      icon: (
        <FaPhoneSquareAlt
          size={20}
          className="text-neutral-100 group-hover:text-cyan-700"
        />
      ),
    },
  ];

  return (
    <section className="w-full lg:h-[100vh] h-full flex lg:flex-row flex-col gap-y-10 items-center justify-center gap-x-2 px-28 py-20 bg-gradient-to-b from-white to-cyan-100">
      <div className="lg:w-1/2 w-full items-start flex flex-col pt-20 gap-y-10">
        <h3 className="text-base text-cyan-600">Contact Us</h3>
        {/* heading of contactcontent */}
        <h1 className="text-5xl font-semibold text-black">
          We’d love to hear from you
        </h1>
        <p className="text-lg font-light lg:w-2/3 text-black">
          Got questions about SumX? Need support, or want to see how we can
          streamline your time management and project tracking? Just ask!
        </p>
        {/* Contact us social Media */}
        <div className="pb-9 border-b w-[60%] border-b-neutral-900 ">
          <h2 className="text-xl text-black font-semibold">Connect With Us</h2>
          <div className="flex flex-row gap-x-5 pt-5 items-center justify-start">
            {social.map((item) => (
              <a
                key={item.id}
                href={item.links}
                className="p-3 border bg-neutral-700 rounded-4xl group transistion-all ease-in-out duration-300 hover:border-cyan-700 hover:bg-transparent"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/*Our Location  */}
        <div className="flex flex-col gap-y-3">
          <h4 className="text-xl text-black font-semibold">
            You Can Find Us At
          </h4>
          {/* Our Contact information */}
          <div className=" flex flex-col gap-y-3 items-start justify-center">
            {address.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-x-2 items-center justify-center"
              >
                <div className="p-2 border bg-neutral-700 rounded-4xl group transistion-all ease-in-out duration-300 hover:border-cyan-700 hover:bg-transparent">
                  {item.icon}
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Us Form */}

      <div className="lg:w-1/2 w-full flex flex-col gap-y-4 pt-18 mx-auto ">
        <h1 className="text-base text-cyan-600 font-light pb-5 hover:underline">
          {" "}
          Send Us Your Message ...
        </h1>
        <form
          onSubmit={handleSubmit}
          className="p-5 border border-neutral-200 bg-white/30 rounded-2xl shadow-md "
        >
          <div className="w-full flex flex-col gap-y-3">
            <label htmlFor="Name">Full Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full focus:ring-2 focus:ring-cyan-500 border p-2 rounded-xl border-white shadow-sm outline-none "
            />
          </div>
          {/* Email & Contact */}
          <div className="w-full flex flex-row gap-x-2 pt-5">
            {/* Email part */}
            <div className="flex flex-col w-1/2 gap-y-3">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none focus:ring-2 focus:ring-cyan-500 border border-white shadow-sm rounded-xl p-2 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Cotact part */}
            <div className="flex flex-col w-1/2 gap-y-3">
              <label htmlFor="contact">Contact No</label>
              <input
                type="text"
                placeholder="Eg: 98xxxxxx"
                className="outline-none focus:ring-2 focus:ring-cyan-500 border border-white shadow-sm rounded-xl p-2 w-full"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          {/* Company Name & Company Location */}
          <div className="w-full flex flex-row gap-x-2 pt-5">
            {/* Company Name */}
            <div className="flex flex-col w-1/2 gap-y-3">
              <label htmlFor="Company Name">Company Name</label>
              <input
                type="text"
                placeholder="Eg: SumX"
                className="outline-none focus:ring-2 focus:ring-cyan-500 border border-white shadow-sm rounded-xl p-2 w-full"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            {/* Company Location */}
            <div className="flex flex-col w-1/2 gap-y-3">
              <label htmlFor="Company Location">Company Location</label>
              <input
                type="text"
                placeholder="Eg: Naxal,Kathmandu"
                className="outline-none focus:ring-2 focus:ring-cyan-500 border border-white shadow-sm rounded-xl p-2 w-full"
                value={companyLocation}
                onChange={(e) => setCompanyLocation(e.target.value)}
              />
            </div>
          </div>
          {/* Description */}
          <div className="w-full pt-5">
            <textarea
              placeholder="Anything you want to convey to us"
              className="w-full outline-none focus:ring-2 focus:ring-cyan-500 border border-white shadow-sm rounded-xl p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* Cookie and policy */}
          <div className="flex flex-row gap-x-2 items-center justify-start pt-5 p-2">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <p>
              I agree to SumX sending me communication message as described on{" "}
              <span className="underline text-cyan-600 hover:text-cyan-700 transition-all ease-in-out duration-200">
                Website and Cookie Policy
              </span>
            </p>
          </div>

          {/* checking field for submission */}
          {submitMessage && (
            <p
              className={`p-2 text-center ${
                submitMessage.includes("Sucessfully")
                  ? "text-green-500 bg-green-50"
                  : "text-red-500 bg-red-50"
              }`}
            >
              {submitMessage}
            </p>
          )}

          <div className="flex w-full items-center justify-center pt-5">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 transition-all ease-in-out duration-300 w-full p-2 rounded-xl text-neutral-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
