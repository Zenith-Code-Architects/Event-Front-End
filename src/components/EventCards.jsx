import { CalendarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'
import '../App.css'

const EventCards = ({ name, cost, location, flier, date, presenter, time }) => {
  return (
    <div className=' flex'>
      <div className='mr-7'>
        <div className='relative'>
          <img src={flier} alt={name} className='w-[202px] h-[250px]' />
          <span className='z-[10] w-[6px] absolute h-14 top-2 -right-1 bg-[#ffbe30] block'></span>
        </div>
      </div>
      <div>
        <h3 className='mb-2'><strong>{name}</strong></h3>
        <p className='pb-[15px] text-[#ffbe30] border-b-2 spacing mb-4'>
          <span className='flex justify-center'></span>
          {cost}</p>
        <p className='flex text-[#878787] spacing text-sm'>
          <span className='w-[25px] h-[25px] rounded-[100%] bg-[#F7F7F7] flex justify-center mb-1 mr-2 '><MapPinIcon width={16} className='text-[#ffbe30]' /></span>
          {location}</p>
        <p className='flex text-[#878787]  spacing text-sm'>
          <span className='w-[25px] h-[25px] rounded-[100%] bg-[#F7F7F7] flex justify-center mb-1 mr-2'><CalendarIcon width={16} className='text-[#ffbe30]' /></span>
          {date}</p>
        <p className='flex text-[#878787]  spacing text-sm mb-3'>
          <span className='w-[25px] h-[25px] rounded-[100%] bg-[#F7F7F7] flex justify-center mb-1 mr-2'><ClockIcon width={16} className='text-[#ffbe30] font-normal' /></span>
          {time}</p>
          <div className='flex justify-center'>
          <a href="event-details"><button className=' text-sm'>VIEW DETAILS</button></a>
          </div>
          
      </div>


    </div>
  )
}

export default EventCards