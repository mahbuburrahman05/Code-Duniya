import React from 'react'


export default function Category_Items({item}) {
  return (

    <div className='max-w-[200px] px-1 text-white h-[150px] flex flex-col bg-[#1B263B] rounded-lg'>
        <img className='mx-auto mt-3' src={item.img} alt="" />
      <h3 className='text-center mt-4'>{item.name}</h3>
    </div>

  )
}
