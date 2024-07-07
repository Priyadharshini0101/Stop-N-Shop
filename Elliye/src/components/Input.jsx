import React, { Children } from 'react'

function Input({className,children,placeholder,name,setSearchBarValue,searchBarValue,suffix}){
  return (
    <div className={`${className} flex items-center justify-center cursor-text`}>
    <input     name={name}
    value={searchBarValue}
   
    onChange={(e) => setSearchBarValue(e.target.value)}  placeholder={placeholder} className={`${className} rounded-[0px] bg-white-A700 h-[48px] pl-8 text-lg`}></input>
    {!!suffix && suffix}
    </div>
  )
}

export default Input