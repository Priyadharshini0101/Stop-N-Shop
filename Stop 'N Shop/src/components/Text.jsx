import React from "react";
import PropTypes from 'prop-types'

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-4xl font-normal lg:text-3xl md:text-[34px] sm:text-[32px]",
  s: "text-md font-normal lg:text-[15px]",
  md: "text-2xl font-medium lg:text-xl md:text-[22px]",
};
Text.propTypes = {
  className:PropTypes.string,
  children:PropTypes.string,
  size:PropTypes.string,
  as:PropTypes.string,
}
function Text({ className = "", as, children, size = "s", ...restProps }) {
  const Component = as || "p";
  return (
    <Component
      className={`text-gray-500 ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Text;
