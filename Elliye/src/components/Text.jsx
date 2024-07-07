import React from 'react'


function Text({className="", as,children, size="s"}) {
    const Component = as || "p";
  return (
    <Component className={`text-gray-500 ${className}}`}>
        {children}
    </Component>
  )
}

export default Text
