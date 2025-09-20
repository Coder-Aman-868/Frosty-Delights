import React from 'react'

const Paragraph = ({ children, className}) => {
  return (
    <p className={`${className} text-[28px] font-black opacity-75 text-white leading-[115%]`}>{children}</p>
  )
}

export default Paragraph