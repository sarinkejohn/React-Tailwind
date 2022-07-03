import React from 'react'
import avatar3 from "../img/avatar-ali.png"
import avatar2 from "../img/avatar-richard.png"
import avatar1 from "../img/avatar-anisha.png"


const Testimonial = () => {
  return (
    <section id='testimonial'>
        {/* container to heading and blocks*/}
        <div className='max-w-6xl px-5 max-auto mt-32 text-center'>
          {/* Heading */}
          <h2 className='text-4xl font-bold text-center'>
            what's diffrent about Manage
          </h2>
          {/* testimonial Container */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6 '>
            {/* testimonial 1 */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg
            bg-veryLightGray md:w-1/3'>
              <img src={avatar1} className='w-16 -mt-14 ' alt="avatar" />
              <h5 className='text-lg font-bold '> Aisha </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Manage has supercharched aour team's workflow.The ability to
                 maintain visibility on larger milestones at all times 
                 keeps everyone motivated."
              </p>
            </div>
                        {/* testimonial 2 */}
          <div className='hidden  flex-col items-center p-6 space-y-6 rounded-lg
            bg-veryLightGray md:flex md:w-1/3'>
              <img src={avatar2} className='w-16 -mt-14 ' alt="avatar" />
              <h5 className='text-lg font-bold '> Richie Watts </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Manage has supercharched aour team's workflow.The ability to
                 maintain visibility on larger milestones at all times 
                 keeps everyone motivated."
              </p>
           </div>
                       {/* testimonial 3 */}
          <div className='hidden  flex-col items-center p-6 space-y-6 rounded-lg
            bg-veryLightGray md:flex md:w-1/3'>
              <img src={avatar3} className='w-16 -mt-14 ' alt="avatar" />
              <h5 className='text-lg font-bold '> Ali BOBO </h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Manage has supercharched aour team's workflow.The ability to
                 maintain visibility on larger milestones at all times 
                 keeps everyone motivated."
              </p>
            </div>
          </div>
          {/* Button */}
          <div className='my-16'>
            <a href="/" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full
                baseline hover:bg-brightRedLight">
                  Get Started
            </a>
          </div>
        </div>

    </section>
  )
}

export default Testimonial