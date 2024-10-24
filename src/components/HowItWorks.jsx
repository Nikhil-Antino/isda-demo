"use client";

import React, { useState } from "react";
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

  const numbArray = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <section className="w-full py-16 md:py-36 px-4">
      <div className="xl:max-w-[1360px] xl:mx-auto flex flex-col items-center gap-y-10 md:gap-y-16">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          {/* <Badge customStyle={"flex items-center gap-x-1 mb-4"}>Overview</Badge> */}

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            How It Works: Your Journey at{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              ISDA
            </span>
          </h2>
          {/* <p className="text-sm md:text-lg text-gray-600 text-center">
            Find the right career path for you by exploring various roles
            offered by Global companies.
          </p> */}
        </div>

        <div className="grid w-full">
          <PointerContainer
            step={1}
            title={"Enroll in ISDA’s 12-Week Program"}
            description={
              "Your Path to Success at ISDA: Step-by-Step Guide to make sure you land your dream job!"
            }
          >
            <div className="flex flex-wrap gap-6 justify-center pb-12">
              {eligiblityData.map((data, index) => (
                <HorizonCard key={index} {...data} />
              ))}
            </div>
          </PointerContainer>

          <PointerContainer
            step={2}
            title={"Upskill to be ready for Global Companies"}
            description={
              "12 Weeks Accelerated Business Executive Program Curated by Top Professionals"
            }
          >
            <div className="grid xl:grid-cols-2 gap-x-6 items-start pb-12">
              <div className="flex flex-col items-start gap-y-4">
                {weeksCurriculumData.map((track, index) => (
                  <TrackCard
                    key={index}
                    iteration={Number(index + 1).toLocaleString("en-IN", {
                      minimumIntegerDigits: 2,
                    })}
                    title={track.track}
                    selected={currentIndex === index}
                    onClick={() => selectTrackHandler(index)}
                    lectures={track.lectures}
                    assessments={track.assignments}
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
                        description={track.description}
                      />
                    </div>
                  </TrackCard>
                ))}
              </div>

              <div className="hidden xl:block w-full">
                {currentTrack && (
                  <ProgramDetailCard
                    duration={currentTrack.duration}
                    topics={currentTrack.trackData}
                    layoutStyle={"!h-fit"}
                    trackTitle={currentTrack.track}
                    factors={currentTrack.factors}
                    description={currentTrack.description}
                  />
                )}
              </div>
            </div>
          </PointerContainer>

          <PointerContainer
            step={3}
            title={"Get Certified & Receive an Assessment Report"}
            description={
              "Get ISDA certified and boost your confidence to tackle any job!"
            }
          >
            <CertificateSection />
          </PointerContainer>

          <PointerContainer
            step={4}
            title={"Job at Global Companies"}
            end={true}
          >
            <div className="grid lg:grid-cols-2 gap-y-6 gap-x-10 py-2 items-center pb-12 relative">
              <div
                className="rounded-2xl p-4 xl:p-8 grid grid-cols-2 grid-rows-2 gap-4 xl:gap-6 rounded-xl relative z-10 bg-white"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                {jobStats.map((data, index) => (
                  <JobStats key={index} {...data} />
                ))}
              </div>

              <div className="flex flex-col gap-y-6">
                <h4 className="text-lg md:text-xl font-semibold text-center">
                  Top Recruiters
                </h4>

                <div className="grid grid-cols-3 gap-4">
                  {numbArray.map((item) => (
                    <Image
                      key={item}
                      src={`/images/hiring-partners-logo/${item}.png`}
                      width={100}
                      height={40}
                      objectFit="contain"
                      alt="Hiring Partners"
                    />
                  ))}
                </div>
              </div>
              <div className=" absolute top-40 right-0 h-[230px] left-1/3 w-20 rounded-full background-gradient blur-[200px] md:h-20 md:w-56"></div>
            </div>
          </PointerContainer>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

function JobStats({ subject, point, logoPath, Icon }) {
  return (
    <div className="grid xl:grid-cols-12 gap-x-3 items-center">
      {logoPath ? (
        <div className="w-10 h-10 rounded-full text-quaternary relative flex items-center justify-center xl:col-span-2">
          <Image
            src={logoPath}
            width={100}
            height={100}
            objectFit="cover"
            alt="logo"
          />
        </div>
      ) : (
        <Icon size={36} className="text-quaternary xl:col-span-2" />
      )}

      <div className="flex flex-col gap-y-1 xl:col-span-10">
        <h5 className="font-semibold text-lg">{point}</h5>
        <h4 className="text-sm font-medium text-gray-600">{subject}</h4>
      </div>
    </div>
  );
}

function CertificateSection() {
  return (
    <div className="grid lg:grid-cols-12 gap-6 items-center mb-12">
      <ul className="flex flex-col gap-y-12 lg:col-span-5">
        <li className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-2 bg-[#f1f5f9] rounded-md p-2 flex items-center justify-center border border-[#E5E7EB]">
            <Image
              src={"/images/logo/diploma.svg"}
              width={60}
              height={60}
              objectFit="cover"
              alt="diploma"
            />
          </div>

          <div className="col-span-10">
            <h4 className="text-lg font-semibold">
              Globally Recognized Certification
            </h4>
            <p className="text-gray-600 text-sm">
              Stand out with a certification that’s valued worldwide.
            </p>
          </div>
        </li>

        <li className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-2 bg-[#f1f5f9] rounded-md p-2 flex items-center justify-center border border-[#E5E7EB]">
            <Image
              src={"/images/logo/good-quality.svg"}
              width={60}
              height={60}
              objectFit="cover"
              alt="good quality"
            />
          </div>

          <div className="col-span-10">
            <h4 className="text-lg font-semibold">Build a Winning Resume</h4>
            <p className="text-gray-600 text-sm">
              Add credibility and attract top recruiters with your ISDA
              certification.
            </p>
          </div>
        </li>

        <li className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-span-2 bg-[#f1f5f9] rounded-md p-2 flex items-center justify-center border border-[#E5E7EB]">
            <Image
              src={"/images/logo/leadership-cert.svg"}
              width={60}
              height={60}
              objectFit="cover"
              alt="leadership"
            />
          </div>

          <div className="col-span-10">
            <h4 className="text-lg font-semibold">Stand Out & Get Hired</h4>
            <p className="text-gray-600 text-sm">
              Add ISDA certification to your LinkedIn and attract high-paying
              offers!
            </p>
          </div>
        </li>
      </ul>

      <div className="relative bg-[#F9FAFB] p-8 rounded-xl border border-[#E5E7EB] lg:col-start-7 lg:col-span-7 w-fit">
        <Image
          src={"/images/isda-certificate.png"}
          width={450}
          height={280}
          objectFit="contain"
          alt="certificate"
        />
      </div>
    </div>
  );
}

// function OldCertificateSection() {
//   return (
//     <div className="grid xl:grid-cols-2 gap-6 items-center mb-12">
//       <div className="relative bg-[#F9FAFB] p-8 rounded-xl border border-[#E5E7EB]">
//         <Image
//           src={"/images/isda-certificate.png"}
//           layout="responsive"
//           width={300}
//           height={250}
//         />
//       </div>

//       <div className="grid gap-y-16">
//         <ul className="flex flex-col gap-y-2">
//           <li className="text-lg text-gray-600">
//             <h4>
//               <span className="font-semibold text-black">
//                 ISDA Certification:
//               </span>{" "}
//               Recognized by top global companies.
//             </h4>
//           </li>

//           <li className="text-lg text-gray-600">
//             <h4>
//               <span className="font-semibold text-black">
//                 Boost Your Resume:
//               </span>{" "}
//               Validate your expertise in business and GenAI skills.
//             </h4>
//           </li>
//         </ul>

//         <div className="flex flex-col gap-y-4 bg-[#F9FAFB] p-8 rounded-xl border border-[#E5E7EB] place-self-start">
//           <h4 className="text-xl font-semibold">Global Assessment Partners</h4>

//           <div className="flex items-center gap-x-6">
//             <Image
//               src={"/images/hiring-partners-logo/21.png"}
//               width={150}
//               height={120}
//               objectFit="contain"
//               layout="responsive"
//             />

//             <Image
//               src={"/images/hiring-partners-logo/22.png"}
//               width={150}
//               height={120}
//               objectFit="contain"
//               layout="responsive"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
