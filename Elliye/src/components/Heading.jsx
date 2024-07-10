import React from 'react'

const sizes = {
   "3xl" : "text-9xl font-bold lg:text-9xl md:text-5xl",
   "2xl" : "text-7xl lg:text-7xl md:text-5xl",
   xl: "text-[64px] font-bold lg-text-[64px] md:text-5xl",
   s:"text-2xl font-bold lg:text-xl md:text-[22px]",
   md:"text-4xl font-bold lg:text-3xl md:text-[34px] sm:text-[32px]",
   xs:"text-lg font-bold lg:text-[15px]",
   lg:"text-[56px] font-bold lg:text-[47px] md:text-5xl sm:text-[42px]", 
}
  
  function Heading({className="", as,children, size="md",...restProps}) {
      const Component = as || "h6";
    return (
      <Component className={`text-gray-800 ${className} ${sizes[size]}`}{...restProps}>
          {children}
      </Component>
    )
  }

export default Heading