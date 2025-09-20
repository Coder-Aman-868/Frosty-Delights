import React from 'react'

const Heading = ({ children, className, small}) => {
  return (
    <h2 className={`${className} text-white leading-[100%] uppercase ${small ? "text-[88px] font-bold" : "text-[138px] font-black"}`}>{children}</h2>
  )
}

export default Heading