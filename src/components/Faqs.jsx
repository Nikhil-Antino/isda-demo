"use client";

import { faqsData } from "@/utils/constant";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButtonColour } from "./shared/Button";
import cn from "classnames";
import Badge from "./shared/Badge";

const FAQ = () => {
  const [active, setActive] = useState(faqsData[0]);

  const handleItemClick = (faq) => {
    setActive(faq);
  };

  return (
    <section
      className="module bg-[#FCFCFD] py-[64px] px-[16px] md:py-20 md:px-[124px]"
      id="FAQs"
    >
      <div className="flex flex-col items-center gap-y-10 xl:max-w-[1360px] xl:mx-auto">
        <div className="flex flex-col items-center gap-y-[16px] pb-[8px]">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>
            Have a doubt?
          </Badge>

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Frequently asked{" "}
            <span className="text-quaternary bg-[url('/images/underline-red.png')] bg-contain bg-center">
              questions
            </span>
          </h2>

          <p className="text-center font-satoshi-regular text-[18px] leading-7 text-gray-600">
            Everything you need to know about the courses, tuition fees, etc.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-y-[40px]">
          <div className="flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-[16px]">
            {faqsData.map((item, index) => {
              return (
                <PrimaryButton
                  key={index}
                  onClick={() => handleItemClick(item)}
                  size={"small"}
                  className={cn({
                    "!bg-red-500": active.category === item.category,
                    "!bg-transparent !text-quaternary !border-quaternary hover:!bg-quaternary hover:!text-white":
                      active.category !== item.category,
                  })}
                >
                  {item.category}
                </PrimaryButton>
              );
            })}
          </div>

          <Faq faq={active?.faqs} />
        </div>
      </div>
    </section>
  );
};

export const Faq = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="flex w-full flex-col gap-y-[32px]">
      {faq?.map(({ question, answer }, index) => (
        <details
          key={index}
          open={!index}
          onClick={() => {
            setIsOpen(index);
          }}
          className="flex w-full flex-col gap-y-[8px]"
        >
          <summary>
            <h3 className={`font-medium text-lg`}>{question}</h3>
          </summary>
          <p className={`font-regular text-base text-gray-600`}>{answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
