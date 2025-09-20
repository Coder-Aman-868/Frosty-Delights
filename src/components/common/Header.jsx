import React from 'react'
import logo from '/assets/images/png/logo.png'
import searchIcon from '/assets/images/svg/searchIcon.svg'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

const Header = () => {
  const NavLinks = [
    {
      linkName: 'Home',
      link: "/",
      isDropDown: false
    },
    {
      linkName: 'Menu',
      isDropDown: true,
      Dropdown: [
        {
          linkName: "Dropdown1",
          link: '/dropdown'
        }
      ]
    },
    {
      linkName: 'Order Type',
      isDropDown: true,
      Dropdown: [
        {
          linkName: "Dropdown1",
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
              <div key={index} className="flex justify-center items-center gap-[3px]">
                <NavLink className='font-extrabold text-[28px] text-white leading-[84%]' to={links.link}>{links.linkName}</NavLink>
                {links.isDropDown ? <Icon icon={'dropdownArrow'} /> : ""}
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