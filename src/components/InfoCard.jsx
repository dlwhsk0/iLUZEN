import { useState } from 'react'

export default function InfoCard({ title, content, src }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='w-full flex flex-col items-center justify-center cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative w-full rounded-lg shadow-lg flex items-center justify-center h-[150px] lg:h-[350px] md:h-[220px] sm:h-[200px] transition-all duration-[800ms] group'>
        <div className='absolute inset-0 z-[-5] w-full h-full rounded-lg bg-black opacity-20' />
        <img
          src={src}
          className='absolute inset-0 z-[-10] w-full h-full object-cover object-center overflow-hidden rounded-lg shadow-lg'
          alt=''
        />
        <div className='absolute inset-0 z-10 w-full h-full p-4'>
          <div className='w-full h-full flex items-center justify-center border-2 rounded text-white text-2xl'>
            <span>{title}</span>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex items-center justify-center bg-[#132648] text-white transition-all duration-[800ms] ${isHovered ? 'h-[160px] lg:h-[360px] md:h-[230px] sm:h-[210px] clip-path-[polygon(0_0,0_100%,100%_100%,100%_0)] opacity-100' : 'h-0 clip-path-[polygon(0_0,0_0,100%_0,100%_0)] opacity-0'}`}
        style={{
          clipPath: isHovered
            ? 'polygon(0 0, 0 100%, 100% 100%, 100% 0)'
            : 'polygon(0 0, 0 0, 100% 0, 100% 0)',
          borderRadius: '0 0 20px 20px',
          position: 'relative',
          transform: 'translateY(-10px)',
          zIndex: -10,
        }}
      >
        <span className='mt-[10px] mx-[5%] sm:mx-[7%] text-[10px] sm:text-[1rem]'>
          {content}
        </span>
      </div>
    </div>
  )
}
