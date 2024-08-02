import React from "react";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  outline: {
    blue_gray_100: " border border-gray-500  border-solid ",
    white_A700: "border-white-A700 border border-solid",
    gray_800: "border-gray-800 border  border-solid ",
   
  },
  underline:{
    blue_gray_100:"text-gray-800 border-b border-blue_gray-100 border-solid"
  }
};

// cons sizes= {
//   sm:"h-[57px] text-[18px]",
//   xs:"h-[48px] text-[18px]",
//   lg:"h-[60px]",
//   md:"h-[40px]  text-[18px]"
// }

function Input({
  className = " ",
  name = "",
  placeholder = "",
  type = "",
  label,
  prefix,
  suffix,
  background = "bg-gray-800",
  shape,
  variant = "outline",
  color = "blue_gray_100",
  searchBarValue,
  ...restProps
}) {
  return (
    <label
      className={`${background} flex items-center justify-center cursor-text ${
        (shape && shapes[shape]) || ""
      }  ${variants[variant]?.[color] || variants[variant] || ""}`}>
      {!!label && label}
      {!!prefix && prefix}

      <input
        name={name}
        value={searchBarValue}
        type={type}   
        // onChange={(e) => setSearchBarValue(e.target.value)}
        placeholder={placeholder}
        className={`${className} h-[48px]  bg-white-A700 text-gray-800 pl-4 text-lg`}
        {...restProps}
         ></input>
      {!!suffix && suffix}
    </label>
  );
}

export default Input;
