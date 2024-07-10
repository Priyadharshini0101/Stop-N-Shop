import React from 'react'
import Text from './Text'
import Img from './Img'


function Template({image="/src/assets/images/img_placeholder.png",title="Purple Warm Jacket",review,addToCart,size="xs",price="$299",className=""}) {
  return (
    <div className={`${className} flex flex-col items-center w-full gap-3.5 p-[20px] sm:p-4`}>
        <Img src={image} alt="placeholder image" className="h-[250px] w-[200px] object-contain"></Img>
        <div className='flex flex-col items-center gap-[9px]'>
            <Text
            size="xs" as="p" className="!text-gray-800" >{title}</Text>
            <Text
            as="p" className="!font-medium">{price}</Text>
        </div>
        {!!review && review}
        {!!addToCart && addToCart}
    </div>
  )
}

export default Template

