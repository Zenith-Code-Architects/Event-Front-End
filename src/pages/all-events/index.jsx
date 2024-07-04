import React, { useEffect, useState } from 'react'
import EventCards from '../../components/EventCards'
import EventImageOne from '../../assets/images/ballondor1.jpg'
import EventImageTwo from '../../assets/images/grammys1.jpg'
import EventImageThree from '../../assets/images/fashion.avif'
import EventImageFour from '../../assets/images/tech.jpg'
import axios from 'axios'

const AllEvents = () => {
  // Define a state to the events
  const [events, setEvents] = useState([]);

  // Define a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://zenith-code-architects-event-api.onrender.com/events');
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      setEvents([]);
    }
  }

  // Get events
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <div className='bgImage2'>
      </div>
      <div className='flex flex-col items-center'>
        {events.map( event => (
          <EventCards
              flier={event.flier}
              name={event.name}
              cost={'Price: $5000'}
              location="Théâtre du Châtelet, Paris"
              date='28th October, 2024'
              time='Starts at 6:00pm GMT'
              presenter='France Football' />
        ))}
        </div> 
      </>
  )
}

export default AllEvents