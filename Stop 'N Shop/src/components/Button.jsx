import React from "react";

const shapes = {
  square: "rounded-[0px]",
};

const sizes = {
  xl: "h-[50px] text-sm",
md: "h-[56px] p-2.5 text-2xl",
  xs: "h-[50px]  text-xl",
  sm: "h-[32px] w-[32px] p-4 text-[18px]",
  lg: "h-[60px] p-5 text-lg",
};

const variants = {
  outline: {
    gray_800:
      "border-gray-800 border border-solid text-gray-800 hover:bg-gray-200",
  },
  fill: {
    gray_800: "bg-gray-800 text-white-A700 hover:bg-gray-600",
    white_A700_1: "bg-gray-100 text-black hover:bg-gray-300",
  },
};

function Button({
  className = "",
  children,
  shape,
  rightIcon,
  leftIcon,
  variant = "fill",
  size = "3xl",
  color = "gray_800",
  ...restProps
}) {
  return (
    <button
      className={`flex flex-row items-center justify-center text-center cursor-pointer  ${className} ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
}

export default Button;
