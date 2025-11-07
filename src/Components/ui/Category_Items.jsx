import React from 'react'

export default function Category_Items({ item }) {
  return (
    <div className='w-[200px] h-[150px] mx-auto md:h-[180px] flex flex-col bg-[#1B263B] text-white rounded-lg   font-Anik'>
      <img className='mx-auto h-[78px] mt-3' src={item.img} alt="" />
      <h3 className='text-center mt-4'>{item.name}</h3>
    </div>
  )
}
