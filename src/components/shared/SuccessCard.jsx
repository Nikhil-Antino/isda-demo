import React, { useMemo, useRef, useState } from "react";
import Rating from "./Rating";

import Image from "next/image";

import cn from "classnames";

import { MdPlayCircleFilled } from "react-icons/md";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

import ReactPlayer from "react-player";

export function SuccessCard({
  name,
  review,
  profileImage,
  designation,
  linkedinProfile,
}) {
  return (
    <div
      className="rounded-xl grid grid-cols-3 relative overflow-hidden p-4 border border-[#E5E7EB]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="flex flex-col gap-y-1 justify-between col-span-2">
        <p className="text-sm text-gray-700 font-regular line-clamp-4">
          {review}
        </p>

        <div className="flex items-center gap-x-4">
          <div className="flex flex-col gap-y-1">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600 font-regular">{designation}</p>

            <Rating rating={5} numberOfStars={5} />
          </div>

          <Link passHref href={linkedinProfile} target="_blank">
            <FaLinkedin size={28} className="text-primary cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="absolute w-56 -right-10 bottom-0">
        <Image
          src={`/images/success-stories/${profileImage}`}
          objectFit="cover"
          width={300}
          height={300}
          alt="student"
        />
      </div>
    </div>
  );
}

export function HighlightedSuccessCard({ name, review, imagePath, rating }) {
  return (
    <div
      className="rounded-xl grid md:grid-cols-11 relative overflow-hidden p-6 h-full border border-[#E5E7EB]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="flex flex-col gap-y-6 justify-between md:col-span-6">
        <p className="text-sm md:text-lg text-gray-700 font-regular">
          {review}
        </p>

        <div className="grid grid-cols-12 items-center">
          <div className="flex flex-col col-span-9">
            <h3 className="text-lg md:text-2xl font-semibold">{name}</h3>

            <Rating rating={rating} numberOfStars={5} starDimension="20px" />
          </div>

          <div className="w-16 h-16 rounded-full bg-red-100 col-span-3 overflow-hidden relative md:hidden">
            <Image
              src={imagePath}
              objectFit="cover"
              width={300}
              height={300}
              alt="student"
            />
          </div>
        </div>
      </div>

      <div className="relative sm:absolute sm:-bottom-6 sm:-right-10 xl:w-80 md:w-64 md:h-full md:col-span-5">
        <Image src={imagePath} objectFit="cover" layout="fill" alt="student" />
      </div>
    </div>
  );
}

export function WallCard({
  name,
  review,
  profileImage,
  rating,
  linkedinProfile,
}) {
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-y-4 m-1 cursor-pointer delay-100 duration-200 ease-linear hover:scale-105 mb-8 border border-[#E5E7EB]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="grid grid-cols-11 items-center">
        <div className="w-16 h-16 rounded-full bg-red-100 col-span-3 md:col-span-2 overflow-hidden relative">
          <Image
            src={`/images/success-stories/${profileImage}`}
            objectFit="cover"
            width={300}
            height={300}
            alt="student"
          />
        </div>

        <div className="col-span-8 md:col-span-9 flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">{name}</h3>
            <Rating rating={5} numberOfStars={5} />
          </div>

          <Link passHref href={linkedinProfile} target="_blank">
            <FaLinkedin size={28} className="text-primary cursor-pointer" />
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-700 font-regular line-clamp-5">
        {review}
      </p>
    </div>
  );
}

export function VideoCard({
  name,
  designation,
  review,
  profileImage,
  customStyle,
  imagePositionStyle,
  videoUrl,
  playerHeight,
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={cn(
        "grid gap-y-6 rounded-xl relative border bg-gradient-to-b from-[#fac749] via-[#ffa323] to-[#fb930e] border-[#E5E7EB] justify-items-center overflow-hidden",
        customStyle
      )}
    >
      <div
        className="absolute inset-0 w-full h-full bg-transparent flex items-center justify-center z-1"
        onClick={() => !showVideo && setShowVideo(true)}
      >
        {showVideo ? (
          <VideoPlayer url={videoUrl} height={playerHeight} />
        ) : (
          <MdPlayCircleFilled size={56} className="text-white" />
        )}
      </div>

      <div className="flex flex-col gap-y-1 place-self-start pt-4 px-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm font-regular">{designation}</p>
      </div>

      <p className="text-center text-3xl font-semibold px-4">{review}</p>

      <div className={cn("self-end", imagePositionStyle)}>
        <Image
          src={`/images/success-stories/${profileImage}`}
          width={250}
          height={250}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

function VideoPlayer({ url, height }) {
  return (
    // <video
    //   controls
    //   className="rounded-md shadow-lg w-full h-full"
    //   crossOrigin="anonymous"
    // >
    //   <source
    //     src="https://drive.google.com/uc?export=download&id=1cB_y0UesHvtJzaLKrxPpCoXLJhCkYNCS"
    //     type="video/mp4"
    //   />
    //   Your browser does not support the video tag.
    // </video>
    // <video
    //   src="https://drive.google.com/uc?export=download&id=1cB_y0UesHvtJzaLKrxPpCoXLJhCkYNCS"
    //   controls
    //   autoPlay
    //   // loop
    //   muted
    //   className="rounded-md shadow-lg w-full h-full"
    //   crossOrigin="anonymous"
    // />
    // <iframe
    //   src={url}
    //   className="rounded-md shadow-lg w-full h-full"
    //   allow="autoplay; encrypted-media"
    //   frameBorder="0"
    // ></iframe>

    // <iframe
    //   src={url}
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
    //   referrerpolicy="strict-origin-when-cross-origin"
    //   allowfullscreen
    //   className="rounded-md shadow-lg w-full h-full"
    // ></iframe>

    <ReactPlayer url={url} controls height={height} width={"450px"} playing />
  );
}
