import React from "react";
import ChipsLayout from "./shared/ChipsLayout";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

const chipsData = [
  {
    point: "Next Batch Starts",
    subject: "25 Nov, 2024",
  },
  {
    point: "Program Duration",
    subject: "12 Weeks",
  },
  {
    point: "Learning Format",
    subject: "Live, Online, Expert-Led Sessions",
  },
  {
    point: "Placement Guarantee",
    subject: "100% Job Guarantee Upon Completion",
  },
];

function Statistics() {
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  return (
    <section className="w-full pt-28 md:pt-24 pb-8 md:pb-10 px-4">
      <div className="md:max-w-[1360px] mx-auto flex flex-col">
        <ChipsLayout
          chipsData={chipsData}
          customStyle="pb-[16px]"
          chipStyle="flex flex-col items-center gap-y-[12px]"
          pointStyle="font-regular text-base text-gray-500 text-center"
          subjectStyle="font-semibold text-lg text-center"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

export default Statistics;
