import React,{Suspense, useContext} from 'react'
import Template1 from "./Template";
import useDataContext from '../contexts/data';

function Feature({filter}) {
   const {data} = useDataContext();
  return (
  <div className="m-auto  flex flex-col h-max w-full  md:flex-col">
    <div className="h-[426px] w-[22%]  bg-gray-800 m-10 "></div>
    <div className="absolute  ml-[150px] mt-[75px] flex gap-[25px] md:ml-0 md:flex-col md:self-stretch">
      <Suspense fallback={<div>Loading feed...</div>}>
        {data.map((i) =>
          i.alt === filter ? (
            <Template1
              key={i.id}
              image={i.image}
              title={i.label}
              price={i.price}
              className='bg-white-A700 shadow-sm '
            ></Template1>
          ) : (
            ""
          )
        )}
      </Suspense>
    </div>
    </div>

  )
}

export default Feature