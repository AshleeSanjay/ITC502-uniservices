"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();

  const handleEnrollNowClick = () => {
    router.push("/login");
  };
  return (
    <div style={{ position: "relative" }}>
      <img className="image" src="/background.png" alt="" />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "8px",
          padding: "200px",
          background: "rgba(0, 0, 0, 0)",
          color: "white",
        }}
      >
        <div className="text-[50px] font-medium font-Poppins leading-[75px]">
          Kyvingus University <br />
          Building a Centre of excellence <br />
          in Legal Education
        </div>
        <div className="text-[23px] font-light font-Poppins leading-[34.50px]">
          Programmes Approved by Bar Council of Your Country
        </div>
        <button
          className="bg-red-500 px-4 py-2 text-2xl font-normal font-Poppins leading-9 text-white"
          onClick={handleEnrollNowClick}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
