import React, { useEffect, useRef, useState } from 'react'
import logo from '/assets/images/png/logo.png'
import searchIcon from '/assets/images/svg/searchIcon.svg'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const Header = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target)
        )
      ) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const NavLinks = [
    {
      linkName: 'Home',
      link: "/",
      isDropDown: false
    },
    {
      linkName: 'Menu',
      isDropDown: true,
      dropdown: [
        {
          linkName: "Dropdown1",
          link: '/dropdown'
        },
        {
          linkName: "Dropdown2",
          link: '/dropdown'
        },
      ]
    },
    {
      linkName: 'Order Type',
      isDropDown: true,
      dropdown: [
        {
          linkName: "Dropdown1",
          link: '/dropdown'
        },
        {
          linkName: "Dropdown2",
          link: '/dropdown'
        }
      ]
    },
    {
      linkName: 'Contact',
      link: "/contact",
      isDropDown: false
    }]
  return (
    <div className='pt-[71px] w-full max-w-[1920px] mx-auto px-[75px]'>
      <div className="flex items-center justify-between ">
        <img src={logo} alt="logo" />
        <div className=" flex justify-center items-center gap-[51px]">
          {
            NavLinks.map((links, index) => (
              <div key={index} ref={(el) => (dropdownRefs.current[index] = el)} onClick={() => links.isDropDown && toggleDropdown(index)} className="flex justify-center items-center gap-[3px]">
                <NavLink className='font-extrabold relative text-[28px] text-white leading-[84%]' to={links.link}>{links.linkName}</NavLink>
                {links.isDropDown ? <Icon icon={'dropdownArrow'} /> : ""}
                {links.isDropDown && openIndex === index && (
                  <div className="absolute top-[120px] p-4 w-[220px] flex flex-col gap-3 z-50
                bg-white/10 backdrop-blur-[20px] border border-white/30 rounded-[25px]
                shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden
                animate-dropdownFadeIn">

                    {links.dropdown.map((link, i) => (
                      <NavLink
                        key={i}
                        to={link.link}
                        className="relative w-full text-center font-semibold text-[20px] text-white
                 px-5 py-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-[15px]
                 hover:bg-white/20 hover:scale-105 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]
                 transition-all duration-300"
                        style={{
                          transform: `translateY(${i * 3}px)`, // subtle layered depth
                        }}
                      >
                        {link.linkName}
                      </NavLink>
                    ))}
                  </div>

                )}
              </div>
            ))
          }
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <div className="flex justify-center items-end flex-col w-[31px] gap-[8px] cursor-pointer">
          <div className="border-b border-[4px] border-white w-full rounded-[99px]"></div>
          <div className="border-b border-[4px] border-white w-[80%] rounded-[99px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Header