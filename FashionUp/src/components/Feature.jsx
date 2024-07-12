import React,{Suspense, useState,useContext,useRef,Fragment, useEffect} from 'react'
import {Template} from '../components/index.js'
import useDataContext from '../contexts/data';
import AliceCarousel  from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

function Feature({filter}) {
   const {data} = useDataContext();
   const sliderItems =   data.filter((i) =>(   
    i.alt === filter
  )
)




  return (
    <div className="m-auto  flex flex-col h-max w-full  md:flex-col">
   <div className="absolute mt-[50px] z-0 h-[426px] w-[22%] bg-gray-800"></div>
    
    <div className="z-10 ml-[50px] mt-[90px] flex gap-[10px] md:ml-[50px] md:flex-col md:self-stretch ">
   
     <AliceCarousel
    responsive={
      { 0: { items: 1 },
      568: { items: 2 },
      768:{items:3},
      1024: { items: 5},
    }
    }

    renderPrevButton={() => {
      return <div className="btn-prev">&lang;</div>}}
    renderNextButton={() => {
      return <div className="btn-next">&rang;</div>}}
   
    disableDotsControls
    mouseTracking
   controlsStrategy='responsize'
   autoPlay
   autoPlayInterval={2000}
  infinite
  keyboardNavigation={true}

    items={ 
    sliderItems.map((i, index) => (
          <Template
     key={i.id}
     data={i}
     className='bg-white-A700 shadow-sm w-[250px]'
   ></Template>
   ))
  }>
  </AliceCarousel> 
  </div>  
  </div>
  )
}

export default Feature
