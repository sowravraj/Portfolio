import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Header = () => {

    const[toggleMenu,setToggleMenu] = useState(false)

    return <header id="header" className="flex justify-between px-5 py-5 bg-primary">
    <a className="font-bold text-black" href="#">Portfolio</a>

    <nav className="hidden md:block">
         <ul className="flex text-white">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact us</a></li>     
         </ul>
    </nav>

    {toggleMenu && <nav className='block md:hidden mobile-nav'>
         <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact us</a></li>     
         </ul>
    </nav>}

    <button className='block md:hidden'   onClick={() => {setToggleMenu(!toggleMenu)}}><Bars3Icon className='text-white h-6' /></button>
         
    </header>
};

export default Header;