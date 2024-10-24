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
    "z-1 relative grid grid-cols-11 justify-items-center gap-y-6 items-start gap-x-1 md:gap-0 md:flex w-full md:items-center md:justify-between p-[24px] w-full";

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
            <div className={`font-satoshi-bold ${chipStyle} col-span-5`}>
              <p className={subjectStyle}>{chip.subject}</p>
              <p className={pointStyle}>{chip.point}</p>
            </div>

            {isMobile ? (
              <>
                {(index == 0 || (index % 2 == 0 && index !== dataLength)) && (
                  <span
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
                  <span
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
