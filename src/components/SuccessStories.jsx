import React from "react";
import SliderComponent from "./shared/CustomSlider";
import Badge from "./shared/Badge";
import { IoHeart } from "react-icons/io5";

import {
  HighlightedSuccessCard,
  SuccessCard,
  VideoCard,
  WallCard,
} from "./shared/SuccessCard";

import Masonry from "react-masonry-css";
import { successStoriesData, successStoriesNewData } from "@/utils/constant";

import cn from "classnames";

function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="w-full flex items-center justify-center py-16 md:py-24 px-4"
    >
      <div className="md:max-w-[1360px] flex flex-col gap-y-16 w-full items-center">
        <div className="flex flex-col gap-y-2 items-center">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>
            Wall of Love <IoHeart size={20} className="text-red-500" />
          </Badge>
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Success Speaks for{" "}
            <span className="text-quaternary bg-[url('/images/underline-red.png')] bg-contain bg-center">
              Itself
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 text-center">
            Alumni share their journeys to top companies through short, engaging
            video testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-3 gap-x-8 gap-y-10">
          {/* <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-8 w-full xl:col-span-4"> */}

          {successStoriesNewData.slice(0, 7).map((successStory, index) => {
            if (index === 2 || index === 3) {
              return (
                <VideoCard
                  key={index}
                  {...successStory}
                  customStyle={"row-span-2"}
                  imagePositionStyle={index === 2 ? "self-end" : "self-start"}
                  playerHeight={index === 2 ? "750px" : "590px"}
                />
              );
            }

            return <SuccessCard key={index} {...successStory} />;
          })}
          {/* </div> */}

          {/* <div className="xl:col-span-3 xl:w-full xl:h-full">
            <HighlightedSuccessCard
              review={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis magni, ad amet, explicabo nobis placeat vero ipsa in
              voluptas quo, neque quas doloremque repudiandae blanditiis
              voluptates aperiam iusto. At, itaque?`}
              name={"Imyush Shukla"}
              rating={4.8}
              imagePath={"/images/success-stories/4.png"}
            />
          </div> */}
        </div>

        <div className="grid w-full">
          <SliderComponent
            swiperOptions={{
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  slidesPerGroup: 1,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                  slidesPerGroup: 2,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                  slidesPerGroup: 3,
                },
              },
            }}
            buttonStyle={{
              size: 24,
              buttonClass: "col-span-6 rounded-full",
              leftButton: "place-self-end",
              rightButton: "place-self-start",
            }}
            spaceFromCarousel="12px"
            paginationLayout="flex items-center gap-x-[12px] col-span-8 md:col-span-2 place-self-center justify-center"
          >
            {successStoriesNewData
              .slice(7, successStoriesNewData.length)
              .map((successStory, index) => (
                <WallCard key={index} {...successStory} />
              ))}
          </SliderComponent>
        </div>

        {/* <div className="w-full">
          <Masonry
            breakpointCols={{
              default: 3,
              1280: 3,
              1024: 2,
              768: 1,
              500: 1,
            }}
            className="flex gap-x-8"
          >
            {successStoriesData.slice(0, 3).map((item, idx) => (
              <WallCard key={idx} {...item} />
            ))}
          </Masonry>
        </div> */}

        {/* <div className="grid xl:grid-cols-7 gap-8">
          <div className="xl:col-span-3 xl:w-full xl:h-full">
            <HighlightedSuccessCard
              review={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis magni, ad amet, explicabo nobis placeat vero ipsa in
              voluptas quo, neque quas doloremque repudiandae blanditiis
              voluptates aperiam iusto. At, itaque?`}
              name={"Imyush Shukla"}
              rating={4.8}
              imagePath={"/images/success-stories/4.png"}
            />
          </div>

          <div className="grid md:hidden w-full">
            <SliderComponent
              swiperOptions={{
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    slidesPerGroup: 1,
                  },
                },
              }}
              buttonStyle={{
                size: 24,
                buttonClass: "col-span-6 rounded-full",
                leftButton: "place-self-end",
                rightButton: "place-self-start",
              }}
              spaceFromCarousel="12px"
              paginationLayout="flex items-center gap-x-[12px] col-span-8 md:col-span-2 place-self-center justify-center"
            >
              {successStoriesData.slice(0, 4).map((successStory, index) => (
                <WallCard
                  key={index}
                  name={successStory.name}
                  review={successStory.review}
                  rating={successStory.rating}
                  imagePath={successStory.imagePath}
                />
              ))}
            </SliderComponent>
          </div>

          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-8 w-full xl:col-span-4">
            {successStoriesData.slice(0, 4).map((successStory, index) => (
              <SuccessCard
                key={index}
                name={successStory.name}
                review={successStory.review}
                rating={successStory.rating}
                imagePath={successStory.imagePath}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SuccessStories;
