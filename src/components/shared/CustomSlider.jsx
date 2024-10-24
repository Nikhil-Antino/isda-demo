"use client";

import React, { useRef } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import {
  A11y,
  Grid,
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";

const SliderComponent = ({
  children,
  buttonStyle = {
    size: 20,
    buttonClass: "",
    leftButton: "",
    rightButton: "",
  },
  paginate = false,
  navigation = true,
  paginationClass = "",
  paginationLayout = "",
  swiperOptions = {},
  leftBtnElem = null,
  rightBtnElem = null,
  spaceFromCarousel = "48px",
  swiperSlideStyle = "",
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        navigation={
          navigation && {
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current || "#prev",
            nextEl: navigationNextRef.current || "#next",
          }
        }
        modules={[
          Navigation,
          Pagination,
          Grid,
          A11y,
          Autoplay,
          EffectCoverflow,
          Mousewheel,
        ]}
        pagination={
          paginate && {
            el: `.${paginationClass || "dotted-red-pagination"}`,
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"> </span>';
            },
          }
        }
        {...swiperOptions}
      >
        {children?.map((elem, index) => (
          <SwiperSlide key={index} className={swiperSlideStyle}>
            {elem}
          </SwiperSlide>
        ))}

        {(navigation || paginate) && (
          <div
            className={`grid w-full grid-cols-12 place-items-center gap-x-[32px]`}
            style={{ paddingTop: spaceFromCarousel }}
          >
            {navigation && (
              <div
                ref={navigationPrevRef}
                id="prev"
                className={`cursor-pointer border border-gray-3 bg-white p-[12px] text-gray-7 hover:bg-gray-50 hover:text-gray-9 ${buttonStyle.buttonClass} ${buttonStyle.leftButton}`}
              >
                {leftBtnElem || <MdArrowBack size={buttonStyle.size} />}
              </div>
            )}

            {paginate && (
              <div
                className={`${
                  paginationClass || "dotted-red-pagination"
                } ${paginationLayout}`}
              ></div>
            )}

            {navigation && (
              <div
                ref={navigationNextRef}
                id="next"
                className={`cursor-pointer border border-gray-3 bg-white p-[12px] text-gray-7 hover:bg-gray-50 hover:text-gray-9 ${buttonStyle.buttonClass} ${buttonStyle.rightButton}`}
              >
                {rightBtnElem || <MdArrowForward size={buttonStyle.size} />}
              </div>
            )}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
