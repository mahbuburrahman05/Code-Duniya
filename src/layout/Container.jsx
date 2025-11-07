import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-[1180px] p-2.5 mx-auto'>{children}</div>
  )
}
