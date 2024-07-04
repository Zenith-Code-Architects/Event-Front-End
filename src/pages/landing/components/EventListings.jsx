import React, { useEffect, useState } from 'react'
import EventCards from '../../../components/EventCards'
import EventImageOne from '../../../assets/images/ballondor1.jpg'
import EventImageTwo from '../../../assets/images/grammys1.jpg'
import EventImageThree from '../../../assets/images/fashion.avif'
import EventImageFour from '../../../assets/images/tech.jpg'
import '../../../App.css'
import axios from 'axios'

const EventListings = () => {
  

  return (
    <><div >
      <h3 className=''>ZCA EVENTS</h3>
      <h2>Event Listing</h2>
      <div className='flex justify-center gap-x-6 py-28 bg-[#F7F7F7]'>
        <div className='flex flex-col gap-y-11'>
          <div className='bg-[#FFFFFF] p-4 border-[1px] hover:border-[#ffbe30]'>
            <EventCards
              flier={EventImageOne}
              name="Ballon D'or 2024"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
          <div className='bg-[#FFFFFF] p-4  border-[1px] hover:border-[#ffbe30]'>
            <EventCards
              flier={EventImageTwo}
              name="Grammys"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
        </div>
        <div className='flex flex-col gap-y-11 '>
          <div className='bg-[#FFFFFF] p-4  border-[1px] hover:border-[#ffbe30]'>
            <EventCards
              flier={EventImageThree}
              name="Who's Next"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
          <div className='bg-[#FFFFFF] p-4  border-[1px] hover:border-[#ffbe30]'>
            <EventCards
              flier={EventImageFour}
              name="Ballon D'or"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
        </div>
        <a href="all-events" className='text-sm'>SEE MORE</a>
      </div>
      </div>
    </>
  )
}

export default EventListings 