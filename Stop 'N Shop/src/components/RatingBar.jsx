import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from 'prop-types'

RatingBar.propTypes = {
  children:PropTypes.string,
  ratingChanged:PropTypes.string,
  className:PropTypes.string,
  starCount:PropTypes.number,
  color:PropTypes.string,
  activeColor:PropTypes.string,
  isEditable:PropTypes.bool,
}
function RatingBar({
  children,
  ratingChanged,
  className,
  starCount = 5,
  color = "gray",
  activeColor = "yellow",
  isEditable = false,
  ...restProps
}) {
  return (
    <>
      <ReactStars
        edit={isEditable}
        className={className}
        count={starCount}
        isHalf={false}
        color={color}
        onChange={ratingChanged}
        activeColor={activeColor}
        {...restProps}
        key={restProps.value || 1}
      ></ReactStars>
      {children}
    </>
  );
}

export default RatingBar;
