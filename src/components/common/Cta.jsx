import React from 'react'

const Cta = ({ children, className, }) => {
    return (
        <div className="z-50 relative max-w-max rounded-[41px]">
            <button className={`${className} px-[47px] py-[43px] text-[38px] font-black leading-[93%] text-white rounded-[41px] bg-[#E23888] relative z-30`}>{children}
            </button>
            <div className="absolute top-0 w-full h-full left-[25px] rounded-[41px] bg-[#EA497F] z-20"></div>
            <div className="absolute top-0 w-full h-full left-[47px] rounded-[41px] bg-[#F15677] z-10"></div>
        </div>
    )
}

export default Cta