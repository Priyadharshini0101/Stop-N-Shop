import React from "react";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  outline: {
    blue_gray_100: "border-gray-800 border border-solid border-[1px]",
    white_A700: "border-white-A700 border border-solid border-[1px]",
  },
};

function Input({
  className = " ",
  name = "",
  placeholder = "",
  type = "",
  label = "",
  prefix,
  suffix,
  background = "bg-gray-800",
  shape,
  variant = "outline",
  color = "blue_gray_100",
  setSearchBarValue,
  searchBarValue,
}) {
  return (
    <label
      className={`${background} flex items-center justify-center cursor-text ${
        (shape && shapes[shape]) || ""
      } ${variants[variant]?.[color] || variants[variant] || ""}`}
    >
      {!!label && label}
      {!!prefix && prefix}

      <input
        name={name}
        value={searchBarValue}
        type={type}
        onChange={(e) => setSearchBarValue(e.target.value)}
        placeholder={placeholder}
        className={`${className} h-[48px] rounded-[0px] bg-white-A700 text-gray-800 pl-4 text-lg`}
      ></input>
      {!!suffix && suffix}
    </label>
  );
}

export default Input;
