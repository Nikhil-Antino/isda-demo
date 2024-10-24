import React from "react";
import Rating from "./Rating";

import Image from "next/image";

export function SuccessCard({ name, review, imagePath, rating }) {
  return (
    <div
      className="rounded-xl grid grid-cols-3 relative overflow-hidden p-4 h-44 border border-[#E5E7EB]"
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="flex flex-col gap-y-1 justify-between col-span-2">
        <p className="text-sm text-gray-700 font-regular">{review}</p>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>

          <Rating rating={rating} numberOfStars={5} />
        </div>
      </div>

      <div className="absolute w-56 -right-10">
        <Image
          src={imagePath}
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

export function WallCard({ name, review, imagePath, rating }) {
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
            src={imagePath}
            objectFit="cover"
            width={300}
            height={300}
            alt="student"
          />
        </div>

        <div className="flex flex-col col-span-8 md:col-span-9">
          <h3 className="text-base font-semibold">{name}</h3>
          <Rating rating={rating} numberOfStars={5} />
        </div>
      </div>

      <p className="text-sm text-gray-700 font-regular">{review}</p>
    </div>
  );
}
