import React from 'react';
import { heroBg } from '../../../assets';



const Hero = () => {
  return (
    <div>



      <div className="place-content-center">

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

      </div>

    </div>

  )
}

export default Hero

{/* <div className="flex h-screen">
      <div className="w-1/2  bg-skyBlue place-content-center pl-20 pr-15 ">
        <div className="mx-auto w-fit flex-col">
          <span className="font-thin text-5xl">Best Design of <br /></span>
          <span className="font font-bold text-5xl">Building Collections</span>
        </div>
      </div>

    </div> */}