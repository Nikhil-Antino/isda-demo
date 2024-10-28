"use client";
import React, { useEffect, useState } from "react";
import ChipsLayout from "./shared/ChipsLayout";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

import { FaCalendarDays } from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";

const chipsData = [
  {
    point: "Next Batch Starts",
    subject: "25 Nov, 2024",
    Icon: FaCalendarDays,
  },
  {
    point: "Avereage Time to Job",
    subject: "12 Weeks",
    Icon: PiClockCountdownFill,
  },
  {
    point: "Job guarantee",
    subject: "100%",
    Icon: IoShieldCheckmarkSharp,
  },
  {
    point: "Average Salary",
    subject: "4.0 LPA",
    Icon: IoWalletSharp,
  },
];

function Statistics() {
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <section className="w-full pt-28 md:pt-24 px-4">
      <div className="xl:max-w-[1360px] mx-auto flex flex-col">
        <ChipsLayout
          chipsData={chipsData}
          customStyle="pb-[16px]"
          chipStyle="flex flex-col items-center gap-y-1"
          pointStyle="font-regular text-sm text-gray-500 text-center"
          subjectStyle="font-semibold text-xl text-center"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

export default Statistics;
