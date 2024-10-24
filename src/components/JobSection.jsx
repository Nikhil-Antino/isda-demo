"use client";

import React, { useState } from "react";
import Badge from "./shared/Badge";
import cn from "classnames";
import Image from "next/image";
import { jobCurriculumData } from "@/utils/constant";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

function JobSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = jobCurriculumData[currentIndex];

  return (
    // bg-[url('/images/background/1.png')] bg-contain bg-center
    <section className="w-full pt-24 pb-40 px-4 bg-[#FCFCFD]">
      <div className="md:max-w-[1360px] md:mx-auto flex flex-col items-center gap-y-16">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>Overview</Badge>

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Explore Your Future{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              Job Roles
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p>
        </div>

        <div className="grid md:grid-cols-5 items-start w-full">
          <div className="flex flex-col items-start gap-y-2 md:col-span-2">
            {jobCurriculumData.map((track, index) => (
              <TrackCard
                key={index}
                trackTitle={track.track}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                index={index}
              >
                <div
                  className={cn("grid gap-y-6 md:hidden", {
                    hidden: currentIndex !== index,
                    block: currentIndex === index,
                  })}
                >
                  {track.trackData.map((data, index) => (
                    <DetailCard
                      key={index}
                      title={data.title}
                      industries={data.industries}
                      stats={data.stats}
                      companies={data.companies}
                      thumbnail={data.thumbnail}
                    />
                  ))}
                </div>
              </TrackCard>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 gap-x-6 col-span-3">
            {currentTrack?.trackData.map((data, index) => (
              <DetailCard
                key={index}
                title={data.title}
                industries={data.industries}
                stats={data.stats}
                companies={data.companies}
                thumbnail={data.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobSection;

function TrackCard({
  trackTitle,
  currentIndex,
  setCurrentIndex,
  index,
  children,
}) {
  const isMobile = useMediaQuery("(max-width: 1279.98px)");
  const selectTrackHandler = (idx) => {
    if (currentIndex === idx && isMobile) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(idx);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 items-start w-full">
      <button
        className={cn(
          "py-4 px-4 md:pl-8 outline-none ring-0 md:!border-l-4 w-full text-start",
          {
            "text-primary md:border-primary": currentIndex === index,
            "text-[#76767A]": currentIndex !== index,
          }
        )}
        onClick={() => selectTrackHandler(index)}
      >
        <h3 className="text-xl font-semibold">{trackTitle}</h3>
      </button>

      {children}
    </div>
  );
}

function DetailCard({
  title,
  industries = [],
  stats,
  companies = [],
  thumbnail,
}) {
  return (
    <div
      className="bg-[#F9FAFB] rounded-xl p-6 flex flex-col gap-y-6 justify-between border border-[#E5E7EB]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={200}
          objectFit="cover"
          className="rounded-xl"
        />
      ) : (
        <div className="w-full h-full bg-quaternary flex items-center justify-center bg-opacity-80 rounded-xl">
          <h4 className="text-xl font-semibold text-white">{title}</h4>
        </div>
      )}

      <ul className="list-disc pl-4">
        {stats.map((stat, index) => (
          <li key={index} className="text-gray-800 font-medium text-base">
            {stat}
          </li>
        ))}
      </ul>

      {companies.length > 0 && (
        <div className="flex gap-2">
          {companies.map((item) => (
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
      )}
    </div>
  );
}
