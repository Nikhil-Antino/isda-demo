import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const SIZE_CONST = {
  // "2xl": "text-lg leading-7 py-4 px-6",
  xl: "text-base leading-6 py-3 px-5",
  large: "text-base leading-6 py-2.5 px-[18px]",
  medium: "text-sm leading-5 py-2.5 px-4",
  small: "text-sm leading-5 py-2 px-3",
};

const VARIANTS = {
  primary: "bg-quaternary text-white hover:bg-red-500 border-quaternary border",
  secondary:
    "bg-transparent border-gray-200 border text-gray-200 hover:border-white hover:text-white",
  secondaryClr:
    "bg-white border-primary border text-primary hover:bg-gray-50 hover:text-blue-700",
};

const Button = forwardRef(
  (
    {
      variant = "primary",
      children,
      customStyle,
      size,
      isCTA = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-lg font-semibold focus:outline-none";

    if (isCTA) {
      return (
        <button
          ref={ref}
          className={cn(
            baseStyles,
            SIZE_CONST[size],
            VARIANTS[variant],
            customStyle
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <a
        ref={ref}
        className={cn(
          "text-center",
          baseStyles,
          SIZE_CONST[size],
          VARIANTS[variant],
          customStyle
        )}
        href="https://app.isda.academy/"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }
);

// Define prop types
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Set displayName for better debugging
Button.displayName = "Button";

export default Button;

export const PrimaryButton = forwardRef(
  ({ children, className, size = "medium", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="primary"
        size={size}
        customStyle={className}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export const SecondaryButton = forwardRef(
  ({ children, className, size = "medium", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="secondary"
        size={size}
        customStyle={className}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export const SecondaryButtonColour = forwardRef(
  ({ children, className, size = "medium", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="secondaryClr"
        size={size}
        customStyle={className}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
