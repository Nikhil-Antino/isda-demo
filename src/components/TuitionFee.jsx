import cn from "classnames";
import React from "react";

import { CiCircleCheck } from "react-icons/ci";

import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonColour,
} from "./shared/Button";
import Image from "next/image";

const courseData = [
  {
    isEmi: false,
    title: "Upfront Payment",
    type: "(Paid At Enrollment)",
    price: 20000,
    mode: "One-time payment",
    model: "Affordable Entry",
    stats: [
      "Secure your spot",
      "Immediate access",
      "One-time payment",
      "No financial pressure",
    ],
  },
  {
    isEmi: true,
    title: "Pay After Placement",
    type: "(Paid After Job)",
    price: 8000,
    mode: "EMIs for 12 Months",
    model: "Risk-Free Payment Model",
    stats: [
      "Pay after you earn",
      "Student-Friendly Model",
      "Pay in easy EMIs Success-tied-Investment",
    ],
  },
];

function TuitionFee() {
  return (
    <section className="w-full py-16 md:py-36 px-4 bg-[#f9fafb]">
      <div className="xl:max-w-[1360px] xl:mx-auto flex flex-col items-center gap-y-10 md:gap-y-16">
        <h2 className="text-xl md:text-3xl font-semibold text-center">
          Course{" "}
          <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
            Tuition Fee
          </span>
        </h2>

        <div className="grid md:grid-cols-9 gap-8 items-center">
          {courseData.map((course, index) => {
            return (
              <React.Fragment key={index}>
                {index === 1 && (
                  <div className="flex flex-col items-center place-self-center md:place-self-start lg:mt-8">
                    <p className="text-gray-600 text-sm text-center">
                      You pay this only after getting placed
                    </p>
                    <Image
                      src={"/images/arrow.png"}
                      width={100}
                      height={50}
                      objectFit="cover"
                      className="rotate-45 md:rotate-12"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center md:col-span-4">
                  <CourseCard
                    title={course.title}
                    type={course.type}
                    price={course.price}
                    mode={course.mode}
                    model={course.model}
                    stats={course.stats}
                    index={index}
                    isDark={index === 0}
                  />
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
