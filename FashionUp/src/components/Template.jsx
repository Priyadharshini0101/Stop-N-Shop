import React from 'react'
import {Text, Img} from '../components/index.js'
import {warning} from '../assets/index.js'


function Template({ setThumbIndex,
  setThumbAnimation,
  i,image=warning,title="Purple Warm Jacket",review,addToCart,size="xs",price="$299",className=""}) {
  return (
 
    <div className={`${className} flex flex-col items-center  gap-[5px] p-[20px] sm:p-4`} onClick={() =>
    {setThumbIndex(i)
      , setThumbAnimation(true)
    }
    }>
        <Img src={image} alt="placeholder image" className="h-[250px] w-[200px] object-contain"></Img>
        <div className='flex flex-col items-center gap-[9px]'>
            <Text
            size="xs" as="p" className="!text-gray-800" >{title}</Text>
            <Text
            as="p" className="!font-medium">{price}</Text>
        </div>
        {!!addToCart && addToCart}
        {!!review && review}
    </div>
  
  )
  
}

export default Template

