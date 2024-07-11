import React from 'react'
import {Heading, Text} from '../components/index.js'

function Section({heading,className="",className1=""}) {
  return (
    <>
       <div className={`flex flex-wrap items-start justify-between gap-5`}>
            <Heading as="h2" className="md:text-3xl sm:text-[28px]">
             {heading}
            </Heading>
            <a href="#" className={` ${className}`}>
              <Text as="p" className="!font-medium !text-gray-800">
                View all
              </Text>
            </a>
          </div>
          
          </>
    
  )
}

export default Section