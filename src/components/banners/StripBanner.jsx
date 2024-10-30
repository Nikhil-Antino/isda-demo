import React from "react";
import { PrimaryButton } from "../shared/Button";

import { GoStopwatch } from "react-icons/go";

function StripBanner() {
  return (
    <div className="flex items-center flex-wrap justify-center w-full bg-gradient-to-r from-[#F8C850] to-[#FC9310] gap-x-6 py-3 px-4">
      <div className="flex items-center gap-x-2">
        <GoStopwatch size={32} className="text-red-500 animate-bounce" />
        <p className="text-base md:text-lg font-semibold inline-block w-fit">
          Next Batch starts on: <span className="text-red-500">25th</span>{" "}
          November.{" "}
          <span className="hidden md:inline-block">
            Take the First Step Today.
          </span>
        </p>
      </div>

      <PrimaryButton>Apply Now</PrimaryButton>
    </div>
  );
}

export default StripBanner;
