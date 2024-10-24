"use client";

import React, { useState } from "react";
import Badge from "./shared/Badge";
import cn from "classnames";
import Image from "next/image";
import { jobCurriculumData } from "@/utils/constant";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

function JobSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = jobCurriculumData[currentIndex];

  return (
    // bg-[url('/images/background/1.png')] bg-contain bg-center
    <section className="w-full py-16 md:pt-24 md:pb-40 px-4 bg-[#FCFCFD]">
      <div className="md:max-w-[1360px] md:mx-auto flex flex-col items-center gap-y-16">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>Overview</Badge>

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Explore Your Future{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              Job Roles
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p>
        </div>

        <div className="grid xl:grid-cols-5 gap-x-4 items-start w-full">
          <div className="flex flex-col items-start gap-y-2 xl:col-span-2 w-full">
            {jobCurriculumData.map((track, index) => (
              <TrackCard
                key={index}
                trackTitle={track.track}
                currentIndex={currentIndex}
                index={index}
                setCurrentIndex={setCurrentIndex}
                logoPath={track.logoPath}
                Icon={track.Icon}
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

          <div className="hidden xl:grid grid-cols-2 gap-x-6 xl:col-span-3">
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
  logoPath,
  Icon,
}) {
  const isMobile = useMediaQuery("(max-width: 1279.98px)");
  const selectTrackHandler = (idx) => {
    if (currentIndex === idx && isMobile) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(idx);
    }
  };

  const selected = currentIndex === index;

  return (
    <div className="flex flex-col gap-y-4 items-start w-full">
      <button
        className={cn(
          "py-4 px-4 ring-0 w-full text-start flex items-center justify-between group hover:rounded-lg hover:text-primary",
          {
            "gradient-border-light rounded-lg text-primary": selected,
            "text-[#76767A]": !selected,
          }
        )}
        onClick={() => selectTrackHandler(index)}
      >
        <div className="grid grid-cols-8 items-center w-full">
          <Icon
            size={32}
            className={cn("group-hover:text-primary", {
              "text-primary": selected,
              "text-[#76767A]": !selected,
            })}
          />

          <h3 className="text-xl font-semibold col-span-7">{trackTitle}</h3>
        </div>

        <MdOutlineKeyboardArrowRight
          size={32}
          className={cn("text-gray-500 group-hover:text-primary", {
            "hidden xl:block xl:!text-primary": selected,
            block: !selected,
          })}
        />

        <FiMinus
          size={32}
          className={cn({
            "text-gray-500 xl:hidden": selected,
            hidden: !selected,
          })}
        />
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
  const dataLength = stats.length - 1;

  const darkMode = false;

  return (
    <div
      className="bg-[#F9FAFB] rounded-xl flex flex-col gap-y-6 justify-between border border-[#E5E7EB] relative items-center overflow-hidden"
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
        <div className="w-[400px] h-[200px] bg-quaternary flex items-center justify-center bg-opacity-80 rounded-xl" />
      )}

      <div
        className={
          "z-1 absolute grid grid-cols-5 items-start justify-items-center gap-y-6 gap-x-1 px-4 py-2 bg-white rounded-xl top-36 border border-[#E5E7EB]"
        }
        style={{
          boxShadow:
            "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        }}
      >
        {stats.map((chip, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-y-4 items-center col-span-2">
              <div className={`font-semibold col-span-5`}>
                <p className="font-semibold text-lg text-center">
                  {chip.subject}
                </p>
                <p className="font-regular text-sm text-gray-500 text-center">
                  {chip.point}
                </p>
              </div>
            </div>

            {(index == 0 || (index % 2 == 0 && index !== dataLength)) && (
              <span
                className={cn({
                  "separator-dark": darkMode,
                  separator: !darkMode,
                })}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col gap-y-4 px-6 pb-6 py-10">
        <h4 className="text-xl font-semibold">{title}</h4>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          cumque iste porro ex accusantium ipsam molestias obcaecati, provident
          numquam natus excepturi doloribus nostrum saepe, beatae repellendus
          eaque enim. Placeat, voluptas.
        </p>

        {/* <ul className="list-disc pl-4">
        {stats.map((stat, index) => (
          <li key={index} className="text-gray-800 font-medium text-base">
            {stat}
          </li>
        ))}
      </ul> */}

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
    </div>
  );
}
