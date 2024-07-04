import React from 'react'

const Forms = ({types, nameholder}) => {
  return (
    <div className='w-full h-[50px] mb-7 box-border rounded-[3px] table'>
        <input type={types} placeholder={nameholder}  className='w-[500px] px-6 h-full bg-[#FFFFFF]'/>
    </div>
  )
}

export default Forms