import React from "react";
import PropTypes from 'prop-types'

Heading.propTypes = {
 className:PropTypes.string,
 children:PropTypes.string,
 size:PropTypes.string,
 as:PropTypes.string,
}

const sizes = {
  lg: "text-7xl lg:text-7xl md:text-5xl",
  s: "text-2xl font-bold lg:text-xl md:text-[22px]",
  md: "text-4xl font-bold lg:text-3xl md:text-[34px] sm:text-[32px]",
  xs: "text-lg font-bold lg:text-[15px]",
};

function Heading({ className = "", as, children, size = "md", ...restProps }) {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-800 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Heading;
