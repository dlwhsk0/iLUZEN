import React from 'react'

export default function PageLayout({ children, thumnail }) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img
        src={thumnail}
        alt='thumbnail'
        className='w-full h-[400px] object-cover'
      />
      <main className='pt-[100px] pb-[150px]'>{children}</main>
    </div>
  )
}
