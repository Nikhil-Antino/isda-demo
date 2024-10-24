import React, { forwardRef } from "react";
import cn from "classnames"; // Classnames utility to manage conditional class application

const Badge = forwardRef(
  ({ variant = "primary", children, customStyle, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-block px-4 py-1 rounded-full text-sm font-medium border", // Common styles
          {
            "border-primary text-primary": variant === "primary", // Primary variant styles
            "border-secondary text-secondary": variant === "secondary", // Secondary variant styles
          },
          customStyle
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
