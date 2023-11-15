"use client";
import { useRouter } from "next/navigation";
import React from "react";

const heroContent = {
  title: "Kyvingus University",
  subtitle1: "Building a Centre of excellence",
  subtitle2: "in Legal Education",
  description: "Programmes Approved by Bar Council of Your Country",
  buttonText: "Enroll Now"
};

export default function HomePage() {
  
  const router = useRouter();
  const handleEnrollNowClick = () => {
    router.push("/login");
  };

  return (
    <div className="relative">
      <img className="image" src="/background.png" alt="" />
      <div className="absolute mt-14 top-0 left-0 flex flex-col items-start gap-2 p-8 md:p-20 lg:p-50 text-white">
        <h1 className="text-5xl md:text-7xl lg:text-[60px] font-bold leading-tight md:leading-snug lg:leading-[95px]">
          {heroContent.title}
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-[50px] font-medium leading-tight md:leading-snug lg:leading-[55px]">
          {heroContent.subtitle1} <br />
          {heroContent.subtitle2}
        </h2>
        <p className="text-lg md:text-xl lg:text-[23px] font-light leading-snug md:leading-relaxed lg:leading-[34.5px]">
          {heroContent.description}
        </p>
        <button
          className="bg-red-500 px-4 py-2 text-lg md:text-xl lg:text-[2xl] font-normal rounded-xl leading-9 text-white"
          onClick={handleEnrollNowClick}
        >
          {heroContent.buttonText}
        </button>
      </div>
    </div>
  );
}