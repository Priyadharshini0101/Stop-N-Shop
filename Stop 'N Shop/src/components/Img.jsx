import React from "react";
import PropTypes from 'prop-types'

Img.propTypes = {
  className:PropTypes.string,
  imgText:PropTypes.string,
  src:PropTypes.string,
  alt:PropTypes.string,
}
function Img({
  className = "",
  imgText,
  src = "/src/assets/images/img_warning.png",
  alt = "testImg",
  ...restProps
}) {
  return (
    <div className="flex items-center gap-[5px]">
      <img
        className={className}
        src={src}
        alt={alt}
        loading={"lazy"}
        {...restProps}
      ></img>
      {!!imgText && imgText}
    </div>
  );
}

export default Img;
