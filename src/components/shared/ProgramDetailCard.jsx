import React from "react";
import cn from "classnames";

function ProgramDetailCard({
  trackTitle,
  topics = [],
  duration,
  layoutStyle,
  factors = [],
  description,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-4 rounded-lg bg-grayshade p-4 md:px-8 md:py-6 border border-[#E5E7EB]",
        layoutStyle
      )}
      style={{
        boxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    >
      <div className="flex flex-col gap-y-1">
        <p className="text-lg font-semibold">What you’ll Learn? 📚</p>

        <p className="text-gray-600 text-sm">{description}</p>

        {/* <p className="font-semibold text-lg text-gray-700">{trackTitle}</p>
        <p className="font-satoshi-medium text-[16px] leading-6">
          Week {duration.from} - {duration.to}
        </p> */}
      </div>

      <div style={{ background: "#2B2B2B", width: "100%", height: "2px" }} />

      <div className="custom-scroll overflow-y-scroll grid gap-y-4 max-h-[35vh] md:max-h-[22vh] lg:pr-4">
        {topics.map((stat, idx) => (
          <div className="flex flex-col gap-y-2" key={idx}>
            <h5 className="text-gray-700">
              <span className="text-black font-semibold">
                Week {stat.week}:
              </span>{" "}
              {stat.title}
            </h5>

            {/* <ul className="flex flex-wrap gap-3 flex-start">
              <li className="text-sm grid gap-y-1">
                <span className="font-bold">Skills: </span>
                <ul className="list-disc list-outside grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-7 pl-4">
                  {stat.skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </li>

              <li className="text-sm grid gap-y-1">
                <span className="font-bold">Outcome: </span>
                <span>{stat.outcome}</span>
              </li>
            </ul> */}
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 pt-2 bg-grayshade border-t-2 border-[#E5E7EB] flex items-center justify-center">
        <p className="text-sm">{factors.join(" | ")}</p>
      </div>
    </div>
  );
}

export default ProgramDetailCard;
