import React from 'react'
import ReactStars from 'react-rating-stars-component'

function RatingBar({children, className, starCount = 5, color="gray",activeColor="yellow", isEditable=false,...restProps}) {
  return (
    <>
    <ReactStars
    edit={isEditable}
    className={className}
    count={starCount}
    isHalf={false}
    color={color}
    activeColor={activeColor}
    {...restProps}
    key={restProps.value || 1}>
        
        </ReactStars>
        {children}</>
  )
}

export default RatingBar