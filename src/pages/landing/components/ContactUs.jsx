
import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div>
        <h4 className='text-[#878787] tracking-[5px] text-lg'>CONTACT US</h4>
        <h3 className='text-4xl'>Keep in touch with us</h3>
      </div>
      <form action="">
        <div className='border-2 w-full h-full'>
          <label htmlFor="">NAME</label>
          <input
            type="text"
            name='name' />
        </div>
        <div className='border-2'>
          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            name='email' />
        </div>
      </form>
    </>
  )
}

export default ContactUs