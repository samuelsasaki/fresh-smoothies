import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {

  let Links = [
    {name:"Home",link:"/"},
    {name:"About Us",link:"aboutus"},
    {name:"Menu",link:"/"},
    {name:"Contact",link:"/"},
  ];

  let [open, setOpen] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={`font-poppins fixed items-center top-0 left-0 w-full  ${color ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="items-center mx-auto justify-between container flex h-20 bg-transparent">
        <div className="gap-1">
          <a href="#home" className="text-2xl">
            <span className={`${color ? 'text-pink-300' : 'text-green-300'} font-bold`}>FRESH</span>
            <span className="text-black font-bold">SMOOTHIES</span>
          </a>
        </div>
        <div onClick={()=>setOpen(!open)} className='absolute right-8  cursor-pointer md:hidden w-6 h-6 text-black'>
                    {
                        open ? <XMarkIcon/> : <Bars3Icon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto z-[-2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-24' : 'top-[-490px]'}`}>
          { Links.map((link) => (
            <li className={`${color ? 'text-black' : 'text-green-300'} text-xl ml-8 my-5 md:my-0 `}><a href={link.link}>{link.name}</a></li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};


export default Header;