import React from 'react'

export default function PageLayout({ children, thumnail }) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img
        src={thumnail}
        alt='thumbnail'
        className='w-full h-[400px] object-cover mb-[100px]'
      />
      <main>{children}</main>
    </div>
  )
}
