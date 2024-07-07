import React from 'react'

function Img({className="", src="",alt="testImg"}) {
  return (
   <img className={className} src={src} alt={alt} loading={"lazy"}></img>
  )
}

export default Img