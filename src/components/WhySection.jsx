import React from "react";

import { MdWork } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import HorizonCard from "./shared/HorizonCard";

const whyData = [
  {
    title: "Guaranteed Job Placements",
    description:
      "Secure your future with ISDA’s job placement guarantee. With our personalized support, you’ll land a role at top global companies like Amazon, Flipkart, Wipro, and Capgemini. Our dedicated placement team works closely with you to ensure the best career opportunities",
    Icon: MdWork,
  },

  {
    title: "Exclusive Learning Experience",
    description:
      "Learn in small groups with a 10:1 student-to-teacher ratio, ensuring personalized guidance and attention. Benefit from direct mentorship and industry insights, making your learning journey more focused and impactful.",
    Icon: AiOutlineLaptop,
  },

  {
    title: "Industry-Relevant Curriculum",
    description:
      "Our curriculum is designed to prepare you for the real world. Learn through case studies and cutting-edge tools like GenAI, and master essential skills such as negotiations, storytelling, Excel, and client management—all aligned with industry needs.",
    Icon: GiBookshelf,
  },

  {
    title: "Globally Recognized Certification",
    description:
      "Earn an ISDA certification that’s respected by top global companies. Plus, you’ll receive detailed assessment reports from trusted platforms like Versant, HirePro, and DoSelect, validating your expertise and boosting your employability.",
    Icon: AiOutlineGlobal,
  },

  {
    title: "Fast-Track Your Career",
    description:
      "In just 12 weeks, you’ll be equipped with the skills needed for rapid career growth. Our results-driven program, combined with continuous mentorship and career support, ensures you’re ready to excel in high-demand roles.",
    Icon: FaRocket,
  },
];

function WhySection() {
  return (
    <section className="w-full pt-36 pb-40 px-4 bg-[#F9FAFB]">
      <div className="md:max-w-[1360px] md:mx-auto flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Why Choose{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              ISDA?
            </span>
          </h2>
          {/* <p className="text-sm md:text-lg text-gray-400 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-8 justify-center">
          {whyData.map((data, index) => (
            <FeatureCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;

function FeatureCard({ title, description, Icon }) {
  return (
    <div className="flex flex-col items-center gap-y-[20px]">
      <span
        className="flex items-center justify-center rounded-[10px] border border-gray-2 bg-white p-[20px]"
        style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
      >
        <Icon size={48} className="text-quaternary" />
      </span>
      <div className="flex flex-col items-center gap-y-[8px]">
        <h3 className="text-center font-semibold text-lg">{title}</h3>
        <p className="text-center font-regular text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
