import React from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import logo from '../img/header/logo.svg'


const Header = () => {
  return (
    <header className=' fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center z-30  '>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link  to="/" className='max-w-[200px]'>
          <img src={logo} alt='logo' />
        </Link>
        <nav className='hidden xl:flex gap-12 font-semibold '>
          <Link to='/home' className='text-[#696c6d] hover:text-primary' >Home</Link>
          <Link to='/about' className='text-[#696c6d] hover:text-primary' >About</Link>
          <Link to='/portfolio' className='text-[#696c6d] hover:text-primary' >Portfolio</Link>
          <Link to='/contact' className='text-[#696c6d] hover:text-primary' >Contact</Link>
        </nav>
      </div>
      
      <Socials />
      <MobileNav />
    
    </header>
  );
};

export default Header;
