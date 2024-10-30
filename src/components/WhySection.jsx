import React from "react";

import Image from "next/image";

import { FaHeart } from "react-icons/fa";

const whyData = [
  {
    title: "Guaranteed Jobs",
    description: "Get placed at top companies like Amazon, guaranteed!",
    logoPath: "/images/logo/suitcase.svg",
  },

  {
    title: "No Experience? No Problem!",
    description: "Start from scratch and get job-ready on acceleration!",
    logoPath: "/images/logo/successful.svg",
  },

  {
    title: "Hired in 12-Weeks",
    description: "Secure a job in just 12 weeks, fast and focused!",
    logoPath: "/images/logo/runner.svg",
  },

  {
    title: "10:1 Teacher Ratio",
    description: "Personalized attention with our small batch sizes!",
    logoPath: "/images/logo/classroom.svg",
  },

  {
    title: "Future-Proof with GenAI",
    description: "Unlock cutting-edge skills with GenAI—be future-proof!",
    logoPath: "/images/logo/ai.svg",
  },

  {
    title: "Hands-On, Minds-On",
    description:
      "Game up with epic case studies that mirror the real-world work!",
    logoPath: "/images/logo/brain.svg",
  },
];

function WhySection() {
  return (
    <section id="why-isda" className="w-full py-16 md:py-24 px-4">
      <div className="xl:max-w-[1360px] xl:mx-auto flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Why Choose{" "}
            <span className="text-quaternary bg-[url('/images/underline-red.png')] bg-contain bg-center">
              ISDA?
            </span>
          </h2>
          {/* <p className="text-sm md:text-lg text-gray-600 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p> */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full">
          {whyData.map((data, index) => (
            <FeatureCard key={index} {...data} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;

function FeatureCard({ title, description, logoPath, index }) {
  return (
    <div className="flex flex-col items-center gap-y-3 md:gap-y-5">
      <span
        className="flex items-center justify-center rounded-[10px] border border-gray-2 p-[20px] relative"
        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
      >
        <Image
          src={logoPath}
          width={60}
          height={60}
          objectFit="cover"
          alt={title}
        />
        {/* <Icon size={48} className="text-quaternary" /> */}
        {index === 3 && (
          <FaHeart
            size={36}
            className="text-red-500 absolute -left-10 bottom-0 -rotate-45"
          />
        )}
      </span>
      <div className="flex flex-col items-center md:gap-y-2">
        <h3 className="text-center font-semibold text-lg">{title}</h3>
        <p className="text-center font-regular text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
