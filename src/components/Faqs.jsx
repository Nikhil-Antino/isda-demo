"use client";

import { faqsData } from "@/utils/constant";
import React, { useState } from "react";
import { SecondaryButton, SecondaryButtonColour } from "./shared/Button";
import cn from "classnames";

const FAQ = () => {
  const [active, setActive] = useState(faqsData[0]);

  const handleItemClick = (faq) => {
    setActive(faq);
  };

  return (
    <section
      className="module bg-[#FCFCFD] py-[64px] px-[16px] md:py-[96px] md:px-[124px]"
      id="FAQs"
    >
      <div className="flex flex-col items-center gap-y-10 md:max-w-[1360px] md:mx-auto">
        <div className="flex flex-col items-center gap-y-[16px] pb-[8px]">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Frequently asked{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              questions
            </span>
          </h2>

          <p className="text-center font-satoshi-regular text-[18px] leading-7 text-gray-600">
            Everything you need to know about the courses, tuition fees, etc.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-y-[40px]">
          <div className="flex flex-wrap items-center justify-center gap-[16px]">
            {faqsData.map((item, index) => {
              return (
                <SecondaryButtonColour
                  key={index}
                  onClick={() => handleItemClick(item)}
                  size={"small"}
                  className={cn({
                    "!bg-blue-600 text-white":
                      active.category === item.category,
                  })}
                >
                  {item.category}
                </SecondaryButtonColour>
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
