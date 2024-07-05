import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventCards from '../../components/EventCards';

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
      
      <div className='grid justify-center'>
        {events?.map(event => (
          <EventCards
            flier = {`https://savefiles.org/${event.eventFlier}?shareable_link=263`}
            name={event.name}
            cost={`¢${event.price}`}
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