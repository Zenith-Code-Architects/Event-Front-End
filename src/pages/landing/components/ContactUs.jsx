
import React from 'react'
import Forms from '../../../components/Forms'

const ContactUs = () => {
  return (
    <>
      <div>
        <div className='mt-8 py-[80px] bg-[#F7F7F7]'>
          <div className='mb-[50px] relative ml-28'>
            <span className='absolute z-[1] bg-[#FF7013] w-11/12 -left-2 h-1 top-[-20px]'></span>
            <h4 className='text-[#878787] mb-4 tracking-[5px] text-lg'>CONTACT US</h4>
            <h3 className='text-4xl'>Keep in touch with <strong>ZCA Events</strong></h3>
          </div>
          <div className='flex flex-col place-items-center gap-x-3' >
            <div className='flex flex-row gap-2'>
              <div>
                <Forms type='text' nameholder='Heart' />
                <Forms type='text' nameholder='Heart' />
              </div>
              <div>
                <Forms type='text' nameholder='Heart' />
                <Forms type='text' nameholder='Heart' />
              </div>
            </div>
            <div>
              <div className='flex flex-col place-items-center'>
                <textarea placeholder="Your Message" className='w-[1000px] mb-7 p-6 h-[150px]' ></textarea>
                <button className='bg-[#FF7013] py-2 px-5 rounded-full drop-shadow-md text-white '>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs