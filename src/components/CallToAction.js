import React from 'react'

const CallToAction = () => {
  return (
    <div> 
        {/* CTA */}
        <section id="CTA" className='bg-brightRed '>
            <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12
             md:py-12 md:flex-row md:space-y-0'>
                {/* Heading */}
                <h2 className='text-5xl font-bold leading-tight text-center text-white md:4xl md:max-w-xl md:text-left'>
                     Simplify how your team works today
                </h2>
                {/* Buton */}
                <div>
                <a href="/" className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full
                   baseline hover:bg-zinc-500">
                  Get Started
                </a>
                </div>

             </div>
        </section>
    </div>
  )
}

export default CallToAction