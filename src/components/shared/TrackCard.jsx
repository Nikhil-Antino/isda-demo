import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import cn from "classnames";

function TrackCard({
  iteration,
  title,
  description,
  selected = false,
  onClick,
  children,
}) {
  return (
    <>
      <div
        className={cn(
          "group flex cursor-pointer items-center justify-between gap-x-[8px] px-[24px] py-[16px] w-full",
          {
            "gradient-border-light rounded-lg": selected,
          }
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-x-6">
          <span className="font-satoshi-medium text-xl text-quaternary">
            {iteration}
          </span>

          <div className="flex flex-col gap-y-1">
            <h4
              className={cn(
                "font-medium text-lg text-gray-400 group-hover:text-quaternary",
                { "!text-quaternary": selected }
              )}
            >
              {title}
            </h4>

            {description && (
              <p
                className={cn(
                  "font-satoshi-normal text-[14px] leading-5 text-gray-400 group-hover:text-gray-2 md:text-[16px] md:leading-6",
                  { "!text-gray-2": selected }
                )}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <MdOutlineKeyboardArrowRight
          size={32}
          className={cn("text-gray-400 group-hover:text-quaternary", {
            "hidden xl:block xl:!text-quaternary": selected,
            block: !selected,
          })}
        />

        <FiMinus
          size={32}
          className={cn({
            "text-gray-400 xl:hidden": selected,
            hidden: !selected,
          })}
        />
      </div>

      <div className="w-full pt-[16px] xl:hidden">{children}</div>
    </>
  );
}

export default TrackCard;
