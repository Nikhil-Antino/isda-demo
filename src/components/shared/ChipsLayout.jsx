import React from "react";
import cn from "classnames";

const ChipsLayout = ({
  customStyle = "",
  chipStyle = "",
  subjectStyle = "",
  pointStyle = "",
  chipsData = [],
  darkMode = false,
  isMobile = false,
}) => {
  const dataLength = chipsData.length - 1;

  const containerStyle =
    "z-1 relative grid grid-cols-11 justify-items-center gap-y-6 items-start gap-x-1 md:gap-0 md:flex lg:w-4/5 md:items-center md:justify-between p-[24px] w-full lg:mx-auto";

  return (
    <div
      className={cn("relative rounded-lg", customStyle, {
        "chipCard-dark": darkMode,
        chipCard: !darkMode,
      })}
    >
      <div
        className={
          isMobile
            ? "z-1 relative grid grid-cols-11 items-start justify-items-center gap-y-6 gap-x-1 p-[24px]"
            : containerStyle
        }
      >
        {chipsData.map((chip, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-y-4 items-center col-span-5">
              <chip.Icon size={48} />

              <div className={`font-semibold ${chipStyle}`}>
                <p className={subjectStyle}>{chip.subject}</p>
                <p className={pointStyle}>{chip.point}</p>
              </div>
            </div>

            {isMobile ? (
              <>
                {(index == 0 || (index % 2 == 0 && index !== dataLength)) && (
                  <div
                    className={cn({
                      "separator-dark": darkMode,
                      separator: !darkMode,
                    })}
                  />
                )}
              </>
            ) : (
              <>
                {index < dataLength && (
                  <div
                    className={cn({
                      "separator-dark": darkMode,
                      separator: !darkMode,
                    })}
                  />
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChipsLayout;
