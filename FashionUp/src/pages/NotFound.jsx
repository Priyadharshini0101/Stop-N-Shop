import React from 'react'
import { Text } from '../components/index.js'
function NotFound() {
  return (
    <div className='w-full h-[150px]  flex items-center justify-center'>
        <Text as="h1" className='text-5xl '>Oops! We ran out of code</Text>
    </div>
  )
}

export default NotFound