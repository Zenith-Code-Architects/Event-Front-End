import React from 'react';
import { heroBg } from '../../../assets';
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div>
      <div className='bgImage2'>
        <div className='overlay flex flex-col justify-center items-center'>
          <h3 className='text-white text-[42px]'>ZCA <strong className='text-[#FFBE30]'>EVENTS</strong></h3>
          <h4 className='text-white spaces2'>  HOME | OF <Link to='all-events'>ALL EVENTS</Link></h4>
        </div>
      </div>
      <div className='bg-[url("./assets/images/SpecialOfferImage.png")] h-[30vh] -mt-40 flex flex-row gap-x-36 items-center'>
        <div className=' ml-6'>
          {/* <p className='text-white text-sm spaces2'> </p> */}
          <p className='text-[24px] text-white'>FIND THE BEST <strong> EVENT ON ZCA</strong></p>
        </div>
        <input type="text" placeholder='Search event' className='w-[350px] rounded-2xl p-2' />
      </div>
    </div>
  )
}



{/* <div className="place-content-center">

        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/heroBg.jpg')] bg-cover bg-center h-screen flex flex-col place-items-center place-content-center">

          <span className="text-fuchsia-200 font-bold text-7xl pt-100">Let us get your events rolling</span>
          <span className="flex items-center gap-x-4
                       bg-white h-10 rounded-lg border border-[#1b1a20] hover:border-4
                       max-w-md w-96 mt-16">
            <input
              type="text"
              className="flex-grow 0 bg-transparent border-none focus:outline-none"
              placeholder="Search events by name, price, and location" />

          </span>


        </div>

      </div> */}




export default Hero

{/* <div className="flex h-screen">
      <div className="w-1/2  bg-skyBlue place-content-center pl-20 pr-15 ">
        <div className="mx-auto w-fit flex-col">
          <span className="font-thin text-5xl">Best Design of <br /></span>
          <span className="font font-bold text-5xl">Building Collections</span>
        </div>
      </div>

    </div> */}