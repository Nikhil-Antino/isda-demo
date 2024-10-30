import cn from "classnames";
import React from "react";

import { CiCircleCheck } from "react-icons/ci";

import { FaCheck } from "react-icons/fa6";

import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonColour,
} from "./shared/Button";
import Image from "next/image";
import Badge from "./shared/Badge";
import PriceCustomLogo from "./shared/PriceCustomLogo";
import { IoWalletSharp } from "react-icons/io5";

const courseData = [
  {
    isEmi: false,
    title: "Upfront Payment",
    description: "Full training access with one-time fee",
    type: "Paid At Enrollment",
    price: 20000,
    mode: "One-time payment",
    model: "Affordable Entry",
    stats: [
      "Expert-led learning",
      "Personalised Attention",
      "30+ Mock Interviews",
      "Global Job Access",
    ],
    buttonCTA: "Apply Now",
  },
  {
    isEmi: true,
    title: "Pay After Placement",
    description: "Flexible payment once you're hired",
    type: "Paid After Job",
    price: 8000,
    mode: "EMIs for 12 Months",
    model: "Risk-Free Payment Model",
    stats: [
      "Pay after you earn",
      "Pay in easy EMIs",
      "Student-Friendly Model",
      "Success-tied-Investment",
    ],
    buttonCTA: "Explore Program",
  },
];

function TuitionFee() {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-[#f9fafb] border-y border-[#E5E7EB]">
      <div className="xl:max-w-[1360px] xl:mx-auto flex flex-col items-center gap-y-10 md:gap-y-16">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>
            Program Fee
          </Badge>

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Course{" "}
            <span className="text-quaternary bg-[url('/images/underline-red.png')] bg-contain bg-center">
              Tuition Fee
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 text-center">
            High-Quality Education, Budget-Friendly Pricing—Invest in Your
            Future!
          </p>
        </div>

        <div className="grid lg:grid-cols-9 gap-8 items-center justify-items-center">
          {courseData.map((course, index) => {
            return (
              <React.Fragment key={index}>
                {index === 1 && (
                  <div className="flex flex-col items-center place-self-center lg:col-span-3">
                    {/* <p className="text-gray-600 text-sm text-center">
                      You pay this only after getting placed
                    </p> */}
                    <Image
                      src={"/images/dotted-arrow.png"}
                      width={100}
                      height={50}
                      objectFit="cover"
                      layout="responsive"
                      className="hidden lg:block"
                      alt="dotted arrow"
                    />

                    <Image
                      src={"/images/arrow.png"}
                      width={100}
                      height={50}
                      objectFit="cover"
                      className="rotate-45 lg:hidden"
                      alt="arrow"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center lg:col-span-3">
                  {/* <CourseCard
                    title={course.title}
                    type={course.type}
                    price={course.price}
                    mode={course.mode}
                    model={course.model}
                    stats={course.stats}
                    index={index}
                    isDark={index === 0}
                  /> */}

                  <NewFeeCard {...course} isPrimary={index === 0} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TuitionFee;

function NewFeeCard({
  type,
  title,
  description,
  price = 0,
  mode,
  model,
  stats = [],
  buttonCTA = "",
  isPrimary = false,
  isEmi = false,
}) {
  return (
    <div className="w-full grid">
      <div
        className={cn(
          "relative rounded-xl p-6 flex flex-col gap-y-8 border-2",
          {
            "border-primary": !isPrimary,
            "border-quaternary": isPrimary,
          }
        )}
      >
        {type && (
          <span
            className={cn(
              "absolute -top-4 right-4 rounded-full px-4 py-1 text-sm text-white",
              { "bg-primary": !isPrimary, "bg-quaternary": isPrimary }
            )}
          >
            {type}
          </span>
        )}

        {isPrimary ? (
          <IoWalletSharp size={28} className="text-quaternary" />
        ) : (
          <PriceCustomLogo fillColor={"#1463ff"} />
        )}

        <div className="flex flex-col items-start">
          <h3
            className={cn("text-2xl font-semibold", {
              "text-primary": !isPrimary,
              "text-quaternary": isPrimary,
            })}
          >
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h4
            className={cn("text-4xl font-semibold", {
              "text-primary": !isPrimary,
              "text-quaternary": isPrimary,
            })}
          >
            INR. {price.toLocaleString("en-IN")}
            {isEmi && <span>/mo</span>}
          </h4>
          <h5 className="text-sm font-gray-700">{mode}</h5>
        </div>

        {stats.length > 0 && (
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-xl font-semibold">{model}</p>

            <div className="grid grid-cols-2 gap-x-4">
              {stats.map((stat, index) => (
                <div className="flex items-center gap-x-2" key={index}>
                  <FaCheck
                    size={18}
                    className={cn({
                      "text-primary": !isPrimary,
                      "text-quaternary": isPrimary,
                    })}
                  />
                  <p className="text-gray-600 text-sm">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isPrimary ? (
          <PrimaryButton>{buttonCTA || "Enroll Now"}</PrimaryButton>
        ) : (
          <SecondaryButtonColour className="!bg-primary !text-white">
            {buttonCTA || "Enroll Now"}
          </SecondaryButtonColour>
        )}
      </div>

      <div
        className={cn("hidden lg:block h-[15vh]", {
          "-order-1": !isPrimary,
          "order-1": isPrimary,
        })}
      />
    </div>
  );
}

function CourseCard({
  title,
  type,
  price = 0,
  mode,
  model,
  stats = [],
  index,
  isDark,
}) {
  return (
    <div className={cn("grid w-full sm:w-fit lg:w-3/4")}>
      <div
        className={cn(
          "rounded-xl p-6 flex flex-col items-center gap-y-8 justify-between cursor-pointer",
          {
            "bg-white border border-[#E2E8F0]": !isDark,
            "bg-primary border border-tertiary ": isDark,
          }
        )}
        style={{
          boxShadow:
            "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        }}
      >
        <div className="flex flex-col gap-y-1">
          <h3
            className={cn("text-2xl font-semibold text-center", {
              "text-primary": !isDark,
              "text-white": isDark,
            })}
          >
            {title}
          </h3>
          <p
            className={cn("text-base font-regular text-center", {
              "text-gray-600": !isDark,
              "text-white": isDark,
            })}
          >
            {type}
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <p
            className={cn("text-5xl font-semibold text-center", {
              "text-primary": !isDark,
              "text-white": isDark,
            })}
          >
            Rs. {price.toLocaleString("en-IN")}
          </p>
          <p
            className={cn("text-base font-regular text-center", {
              "text-gray-600": !isDark,
              "text-white": isDark,
            })}
          >
            {mode}
          </p>
        </div>

        <div className="flex flex-col gap-y-1 items-center w-full">
          <p
            className={cn("text-xl font-semibold text-center", {
              "text-primary": !isDark,
              "text-white": isDark,
            })}
          >
            {model}
          </p>
          <div
            className={cn(
              "text-base font-regular grid grid-cols-2 gap-y-2 gap-x-4",
              {
                "text-gray-600": !isDark,
                "text-white": isDark,
              }
            )}
          >
            {stats.map((stat, idx) => (
              <p className="grid grid-cols-7 items-center w-full" key={idx}>
                <CiCircleCheck
                  size={18}
                  className={cn({
                    "text-primary": !isDark,
                    "text-white": isDark,
                  })}
                />
                <span className="col-span-6">{stat}</span>
              </p>
            ))}
          </div>
        </div>

        {isDark ? (
          <SecondaryButton
            customStyle={"bg-white text-primary hover:!text-blue-700"}
          >
            Start Your Journey
          </SecondaryButton>
        ) : (
          <PrimaryButton>Start Your Journey</PrimaryButton>
        )}
      </div>
      <div
        className={cn("hidden lg:block h-[15vh]", {
          "-order-1": index,
          "order-1": !index,
        })}
      />
    </div>
  );
}
