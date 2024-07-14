import React from 'react'
import useDataContext from '../contexts/data'
import { useParams } from 'react-router'

const shapes = {
  square: "rounded-[0px]",
}

const sizes = {
  "6xl" : "h-[64px] px-[35px] text-lg",
  "4xl" : "h-[60px] px-2.5",
  xl : "h-[50px] text-sm",
  "2xl" : "h-[56px] p-2.5 text-2xl",
  xs : "h-[24px] px-[5px]",
  "3xl" : "h-[50px]  text-xl",
  md: "h-[48px] px-[34px] text-sm",
  sm : "h-[32px] w-[32px] p-4 text-[18px]",
  "7xl" : "h-[103px] px-[33px] text-lg",
  "5xl" : "h-[60px] p-5 text-lg",
  lg: "h-[50px] px-[22px] text-lg"


}

const variants = {
  outline:{
    gray_800 : "border-gray-800 border border-solid text-gray-800",
    gray_500 : "border-gray-500 border-2 border-solid text-gray-500",
    blue_gray_100 : "border-blue-gray-100 border border-solid text-gray-800"
  },
  fill:{
    gray_800 : "bg-gray-800 text-white-A700",
    white_A700_1: "bg-gray-100 text-black",
    white_A700: "bg-white-A700 text-gray-800"
  }

}


function Button({className="",
  children,
   shape,
   rightIcon,
   leftIcon,
  variant = "fill",
size="lg",
color="gray_800",
...restProps}) {

  return (
    <button 
  
     
    className={`flex flex-row items-center justify-center text-center cursor-pointer  ${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}  {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}</button>
  )
}

export default Button