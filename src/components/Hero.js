import React from 'react'
import heropic from "../img/illustration-intro.svg"

const Hero = () => {
  return (
<div>
<section id="hero">
        {/* flex conteiner */}
        <div className='container flex flex-col-reverse md:flex-row item-center
         px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
            {/* left item */}
            <div className='flex flex-col mb-32 spece-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl 
                md:text-left'>
                    Bring everyone together to build better product
                </h1>
                <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                    Manage makes it simpler for software teams to plan day-to-day tasks
                </p>
                <div className='flex justify-center md:justify-start'>
                <a href="/" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full
                     baseline hover:bg-brightRedLight">
                          Get Started
                 </a>
                </div>
            </div>
            {/* image */}
            <div className='md:w-1/2'>
                <img src={heropic} alt="hero-pic"/>    
            </div>
        </div>
    </section>
    {/* features  */}

</div>
    
  )
}

export default Hero