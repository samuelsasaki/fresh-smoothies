import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Nav } from './assets/components/Navbar.tsx';
import { Link, animateScroll as scroll  } from 'react-scroll';

const Header = () => {

  let Links = [
    {name:"Home",link:"hero", offset: 0},
    {name:"About Us",link:"aboutus", offset: -75},
    {name:"Menu",link:"menu", offset: 50},
  ];

  let [open, setOpen] = useState(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const handleSetActive = (to) => {
    console.log(to);
  }

  return (
    <Nav>
      <div className="items-center mx-auto justify-between container flex h-20 bg-transparent font-fredoka">
        <div className="gap-1">
          <Link href="#home" className={`text-2xl ${color ? 'pl-10' : 'pl-10'}`}>
            <span className={`${color ? 'text-[#ab0afc]' : 'md:text-yellow-200 text-[#ab0afc]'} font-bold`}>FRESH</span>
            <span className={`${color ? 'text-black' : 'md:text-white text-black'} font-bold`}>SMOOTHIES</span>
          </Link>
        </div>
        <div onClick={()=>setOpen(!open)} className='absolute right-10  cursor-pointer md:hidden w-6 h-6 text-black '>
                    {
                        open ? <XMarkIcon/> : <Bars3Icon />
                    }
                </div>
                <ul className={`bg-white md:bg-transparent md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto z-[-2] left-0 w-full md:w-auto md:pl-0 pl-9 md:transition-none transition-all duration-300 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          { Links.map((link) => (
            <li className={`${color ? 'text-black' : 'md:text-yellow-200 text-black'} font-bold text-xl ml-8 my-5 md:my-0 cursor-pointer`}><Link to={link.link} offset={link.offset} spy={true} activeClass="active" smooth={true} duration={500} onSetActive={handleSetActive}>{link.name}</Link></li>
            ))
          }
        </ul>
      </div>
    </Nav>
  );
};


export default Header;