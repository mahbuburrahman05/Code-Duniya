import React from 'react'

export default function Flexbox({children,className}) {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}
