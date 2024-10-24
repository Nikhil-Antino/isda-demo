"use client";

import React, { useState } from "react";
import Badge from "./shared/Badge";
import PointerContainer from "./shared/PointerContainer";

import HorizonCard from "./shared/HorizonCard";

import cn from "classnames";
import TrackCard from "./shared/TrackCard";
import ProgramDetailCard from "./shared/ProgramDetailCard";
import {
  eligiblityData,
  jobStats,
  weeksCurriculumData,
} from "@/utils/constant";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import Image from "next/image";

function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = weeksCurriculumData[currentIndex];

  const isMobile = useMediaQuery("(max-width: 1279.98px)");

  const selectTrackHandler = (idx) => {
    if (currentIndex === idx && isMobile) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(idx);
    }
  };

  return (
    <section className="w-full pt-36 pb-40 px-4">
      <div className="md:max-w-[1360px] md:mx-auto flex flex-col items-center gap-y-16">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          {/* <Badge customStyle={"flex items-center gap-x-1 mb-4"}>Overview</Badge> */}

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            How It Works: Your Journey at{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              ISDA
            </span>
          </h2>
          {/* <p className="text-sm md:text-lg text-gray-400 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p> */}
        </div>

        <div className="grid w-full">
          <PointerContainer step={1} title={"Enroll in ISDA’s 12-Week Program"}>
            <div className="flex flex-wrap gap-6 justify-center pt-4 pb-16">
              {eligiblityData.map((data, index) => (
                <HorizonCard key={index} {...data} />
              ))}
            </div>
          </PointerContainer>

          <PointerContainer step={2} title={"Enroll in ISDA’s 12-Week Program"}>
            <div className="grid xl:grid-cols-5 gap-x-6 items-start pb-12">
              <div className="flex flex-col items-start gap-y-4 xl:col-span-2">
                {weeksCurriculumData.map((track, index) => (
                  <TrackCard
                    iteration={Number(index + 1).toLocaleString("en-IN", {
                      minimumIntegerDigits: 2,
                    })}
                    title={track.track}
                    selected={currentIndex === index}
                    onClick={() => selectTrackHandler(index)}
                  >
                    <div
                      className={cn("xl:hidden", {
                        hidden: currentIndex !== index,
                        block: currentIndex === index,
                      })}
                    >
                      <ProgramDetailCard
                        duration={track.duration}
                        topics={track.trackData}
                        layoutStyle={"!h-fit"}
                        trackTitle={track.track}
                        factors={track.factors}
                      />
                    </div>
                  </TrackCard>
                ))}
              </div>

              <div className="hidden xl:block w-full col-span-3">
                {currentTrack && (
                  <ProgramDetailCard
                    duration={currentTrack.duration}
                    topics={currentTrack.trackData}
                    layoutStyle={"!h-fit"}
                    trackTitle={currentTrack.track}
                    factors={currentTrack.factors}
                  />
                )}
              </div>
            </div>
          </PointerContainer>

          <PointerContainer
            step={3}
            title={"Get Certified & Receive an Assessment Report"}
          >
            <div className="grid xl:grid-cols-2 gap-6 items-center">
              <div className="relative bg-[#F9FAFB] p-8 rounded-xl border border-[#E5E7EB]">
                <Image
                  src={"/images/isda-certificate.png"}
                  layout="responsive"
                  width={300}
                  height={250}
                />
              </div>

              <div className="grid gap-y-16">
                <ul className="flex flex-col gap-y-2">
                  <li className="text-lg text-gray-600">
                    <h4>
                      <span className="font-semibold text-black">
                        ISDA Certification:
                      </span>{" "}
                      Recognized by top global companies.
                    </h4>
                  </li>

                  <li className="text-lg text-gray-600">
                    <h4>
                      <span className="font-semibold text-black">
                        Boost Your Resume:
                      </span>{" "}
                      Validate your expertise in business and GenAI skills.
                    </h4>
                  </li>
                </ul>

                <div className="flex flex-col gap-y-4 bg-[#F9FAFB] p-8 rounded-xl border border-[#E5E7EB] place-self-start">
                  <h4 className="text-xl font-semibold">
                    Global Assessment Partners
                  </h4>

                  <div className="flex items-center gap-x-6">
                    <Image
                      src={"/images/hiring-partners-logo/21.png"}
                      width={150}
                      height={120}
                      objectFit="contain"
                      layout="responsive"
                    />

                    <Image
                      src={"/images/hiring-partners-logo/22.png"}
                      width={150}
                      height={120}
                      objectFit="contain"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PointerContainer>

          {/* <PointerContainer step={5} title={"Job at Global Companies"}>
            <div className="grid grid-cols-2 gap-x-8 py-2 px-4">
              <div className="rounded-2xl p-8 grid grid-cols-2 grid-rows-2 gap-6">
                {jobStats.map((data, index) => (
                  <JobStats key={index} {...data} />
                ))}
              </div>
            </div>
          </PointerContainer> */}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

function JobStats({ subject, point }) {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-10 h-10 rounded-full bg-quaternary"></div>
      <div className="flex flex-col gap-y-1">
        <h5 className="font-semibold text-lg">{point}</h5>
        <h4 className="text-sm font-medium text-gray-600">{subject}</h4>
      </div>
    </div>
  );
}
