import React from 'react'

const SuccessCard = ({data}) => {
  return (
    <div className='bg-[#1B263B] ml-4 md:ml-0 max-w-[377px] text-white rounded-lg p-6 my-4 font-Anik'>
        <h4 className='text-[32px] font-semibold'>{data.title}</h4>
        <h3 className='text-[32px] mb-2 font-semibold'>{data.heading}</h3>
        <p className='text-[16px] '>{data.description}</p>

    </div>
  )
}

export default SuccessCard