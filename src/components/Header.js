import React from 'react'
import logo from '../img/logo.svg'




const Header = () => {

  const btn = document.getElementById('menu-btn')
  const nav = document.getElementById('menu')
  btn.addEventListener('click',() =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
   })

  return (
    <nav className='relative container mx-auto p-6  '>
        {/*  flex container  */}
        <div className='flex items-center justify-between'>
               {/* Logo */}
            <div className ='pt-2'>
                <img src = {logo} alt='logo'/>
            </div> 
                {/* Menu items */}
                <div className="hidden md:flex space-x-8">
                    <a href='/'className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href='/'className='hover:text-darkGrayishBlue'>Products</a>
                    <a href='/'className='hover:text-darkGrayishBlue'>About Us</a>
                    <a href='/'className='hover:text-darkGrayishBlue'>Carries</a>
                    <a href='/'className='hover:text-darkGrayishBlue'>Community</a>
                    
                </div>
                    {/* Button */}
                    <a href="/" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full
                     baseline hover:bg-brightRedLight">Get Started</a>

                     {/* Hamburger icon */}
                     <button id="menu-btn" className='open block hamburger md:hidden
                     focus:outline-none'>
                      <span className='hamburger-top'></span>
                      <span className='hamburger-middle'></span>
                      <span className='hamburger-bottom'></span>
                     </button>

        </div>
        
        {/* moble menu */}
        <div className='absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6
        font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md '>
          <a href='/'>Pricing</a>
          <a href='/'>Product</a>
          <a href='/'>About Us</a>
          <a href='/'>Careers</a>
          <a href='/'>Community</a> 
        </div>

    </nav>
  )
}

export default Header