import React, { Children } from 'react'


const shapes = {
  square: "rounded-[0px]",
}

const sizes = {
  xs : "h-[48px]  text-lg",
  md: "h-[64px] pl-6 pr-4 text-lg",
  sm : "h-[57px] pr-[35px] text-lg",
  lg: "h-[60px] pl-6",

  
}


const variants = {
  outline:{
    blue_gray_100 : "border-gray-800 border border-solid border-[1px]",
      white_A700 : "border-white-A700 border border-solid border-[1px]"
  },
  fill:{
    white_A700: "bg-white-A700",
    gray_800:"bg-gray-800 text-blue_gray-100_7f"
  },
  underline:{
    blue_gray_100:"text-gray-800 border-b border-blue_gray-100 border-solid",
  }

}


function Input({className=" ",
  name="",
  placeholder ="",
  type="",
  children,
  label="",
  prefix,
  suffix,
  background="bg-gray-800",
  shape,
  variant ="outline",
  size="",
  color="blue_gray_100",
  setSearchBarValue,searchBarValue}){
  return (
    <label className={`${background} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant]?.[color] || variants[variant] || "" }`}>
      {!!label && label}
      {!!prefix && prefix}
   
    <input     name={name}
    value={searchBarValue}
    type={type}
    onChange={(e) => setSearchBarValue(e.target.value)}  placeholder={placeholder} className={`${className} h-[48px] rounded-[0px] bg-white-A700 text-gray-800 pl-8 text-lg`}></input>
    {!!suffix && suffix}
    </label>
  )
}

export default Input