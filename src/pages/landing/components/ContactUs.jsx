import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div>
        <h4 className='text-[#878787] tracking-[5px] text-lg'>CONTACT US</h4>
        <h3 className='text-4xl'>Be the first to hear of the<strong className='font-black '> LATEST EVENTS</strong></h3>
      </div>
      <form action="">
        <label htmlFor="">NAME</label>
        <input 
        type="text"
        name='name'/>
        <label htmlFor="">EMAIL</label>
        <input 
        type="text"
        name='email'/>
      </form>
    </>
  )
}

export default ContactUs