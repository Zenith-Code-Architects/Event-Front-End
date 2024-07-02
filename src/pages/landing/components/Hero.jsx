import React from 'react'
import { heroBg } from '../../../assets'

const Hero = () => {
  return (
    <div className="">
    <img src={heroBg} alt="hero background" className="object-cover w-full h-full" />
    <span className="text-white font-bold text-5xl">Let us get your events rolling</span>
  </div>
  )
}

export default Hero