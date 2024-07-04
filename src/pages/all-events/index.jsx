import React from 'react'
import EventCards from '../../components/EventCards'
import EventImageOne from '../../assets/images/ballondor1.jpg'
import EventImageTwo from '../../assets/images/grammys1.jpg'
import EventImageThree from '../../assets/images/fashion.avif'
import EventImageFour from '../../assets/images/tech.jpg'

const AllEvents = () => {
  return (
    
    <div className='flex justify-center'>
     <div className=''>
      <div></div>
          <div className='bg-[#FFFFFF] p-4 '>
            <EventCards
              flier={EventImageOne}
              name="Ballon D'or 2024"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
          <div className='bg-[#FFFFFF] p-4  '>
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
        <div className=' '>
          <div className='bg-[#FFFFFF] p-4  '>
            <EventCards
              flier={EventImageThree}
              name="Who's Next"
              cost='Price: $5000'
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
          </div>
          <div className='bg-[#FFFFFF] p-4  '>
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
    </div>
  )
}

export default AllEvents