import React from 'react'

const Cta = ({ children, className, }) => {
    return (
        <button className={`${className} px-[47px] py-[43px] text-[38px] font-black leading-[93%] text-white rounded-[41px] bg-[#E23888] shadow-[25px_0px_0px_#EA497F,47px_0px_0px_#F15677]
`}>{children}
        </button>
    )
}

export default Cta