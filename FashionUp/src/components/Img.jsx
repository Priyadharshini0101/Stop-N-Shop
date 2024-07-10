import React from 'react'

function Img({className="",imgText,src="/src/assets/images/img_warning.png",alt="testImg", ...restProps}) {
  return (
  <div className='flex items-center gap-[5px]'>
   <img className={className} src={src} alt={alt} loading={"lazy"} {...restProps}>
   </img>
   {!!imgText && imgText}
   </div>
  )
}

export default Img