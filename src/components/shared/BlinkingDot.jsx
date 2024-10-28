import React from "react";

import cn from "classnames";

function BlinkingDot({ dotSizeStyle, blikingDotStyle, dotStyle }) {
  return (
    <span className={cn("relative flex h-3 w-3", dotSizeStyle)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75",
          blikingDotStyle
        )}
      ></span>
      <span
        className={cn(
          "relative inline-flex rounded-full h-3 w-3 bg-sky-500",
          dotStyle
        )}
      ></span>
    </span>
  );
}

export default BlinkingDot;
