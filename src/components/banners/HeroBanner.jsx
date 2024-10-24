import React from "react";

import { PrimaryButton, SecondaryButton } from "@/components/shared/Button";

import { ReactTyped } from "react-typed";
import { AiFillStar } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import SliderComponent from "../shared/CustomSlider";

import Image from "next/image";
import Rating from "../shared/Rating";

function HeroBanner() {
  return (
    <section className="bg-primary-dark w-full flex flex-col justify-center items-center relative">
      <div className="lg:max-w-[1360px] grid lg:grid-cols-12 pt-12 pb-44 px-4 items-center">
        <div className="lg:col-span-7 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-white text-2xl lg:text-4xl">
              <p className="flex items-center flex-wrap gap-2">
                <span className="text-secondary">Land your first Job</span> in
                High{" "}
                <span className="bg-[#7514f5] px-1 py-1.5">
                  <ReactTyped
                    strings={["Impact", "Demand"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                    className="!w-fit"
                  />
                </span>{" "}
              </p>
              <p>Business Roles</p>
            </h1>

            <p className="text-sm lg:text-lg text-white font-regular">
              Master Client Relationship, negotiations, Product Pitch, business
              analytics, and GenAI skills. Secure guaranteed jobs at top global
              companies, confidently
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <SecondaryButton>Check Your Eligibility!</SecondaryButton>
            <PrimaryButton>Download Brochure!</PrimaryButton>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <SecondaryButton
              size={"small"}
              className={"!border-white !bg-transparent"}
            >
              Check Your Eligibility!
            </SecondaryButton>
            <PrimaryButton size={"small"}>Download Brochure!</PrimaryButton>
          </div>

          <div className="flex items-center flex-wrap justify-between lg:justify-start gap-y-4 gap-x-6 text-white">
            <div className="flex items-center gap-x-2">
              <span className="p-1 rounded-full border border-secondary">
                <AiFillStar size={20} className="text-secondary" />
              </span>

              <div className="flex flex-col gap-y-1">
                <div className="h-full">
                  <Rating rating={4.8} numberOfStars={5} />
                </div>
                <p className="text-xs">Rated 4.8/5</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <span className="p-1 rounded-full border border-secondary">
                <MdBusinessCenter size={20} className="text-secondary" />
              </span>

              <div className="flex flex-col gap-y-1">
                <p className="text-sm font-semibold">400+</p>
                <p className="text-xs">Partner Companies</p>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <span className="p-1 rounded-full border border-secondary">
                <IoIosPeople size={20} className="text-secondary" />
              </span>

              <div className="flex flex-col gap-y-1">
                <p className="text-sm font-semibold">1000+</p>
                <p className="text-xs">Student Placed</p>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col gap-y-4">
            <p className="text-lg lg:text-xl font-semibold">
              Global Assessment Partners
            </p>

            <p className="text-base lg:text-lg font-medium">
              DoSelect by Naukri | HirePro | Versant by Pearson
            </p>
          </div>
          {/* 
          <div className="text-white flex flex-col gap-y-4">
            <p className="text-lg lg:text-xl font-semibold">
              Global Assessment Partners
            </p>

            <p className="text-base lg:text-lg font-medium">
              DoSelect by Naukri | HirePro | Versant by Pearson
            </p>
          </div> */}
        </div>
        <div className="lg:col-span-5 text-white lg:order-none flex items-center justify-center">
          <Image src="/images/hero.png" alt="hero" width={500} height={500} />
        </div>
      </div>

      <div className="absolute top-[90%] md:top-[85%]">
        <HeroCenterBoarder />
      </div>
    </section>
  );
}

export default HeroBanner;

function HeroCenterBoarder() {
  const numbArray = Array.from({ length: 19 }, (_, index) => index + 1);

  return (
    <div
      className="bg-white rounded-xl p-6 flex flex-col items-center w-[360px] lg:w-[980px] gap-y-6 overflow-hidden"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="flex flex-col gap-y-1 items-center">
        <h2 className="text-base lg:text-2xl font-semibold text-center">
          Our Hiring Partners –{" "}
          <span className="text-primary">Leading Global Companies</span>
        </h2>
        <p className="text-sm lg:text-lg text-gray-400 text-center">
          Trusted by the world’s top companies to hire job-ready professionals.
        </p>
      </div>

      <div className="relative overflow-hidden h-full w-full">
        <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 rounded-xl"></div>

        <div className="grid h-full w-full grid-flow-col items-center gap-x-10 animate-infiniteScroll">
          {numbArray.map((item) => (
            <div
              className="relative flex h-12 w-28 items-center justify-center bg-transparent"
              key={item}
            >
              <Image
                src={`/images/hiring-partners-logo/${item}.png`}
                alt={item}
                objectFit="cover"
                height={40}
                width={120}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 rounded-xl"></div>
      </div>
    </div>
  );
}
