import { useState } from 'react'

export default function InfoCard({ content, src }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='w-full flex flex-col items-center justify-center cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-[400px] rounded-lg shadow-lg flex items-center justify-center'>
        <img
          src={src}
          className='w-full h-full object-cover object-center overflow-hidden rounded-lg shadow-lg'
          alt=''
        />
      </div>
      <div
        className={`w-full flex items-center justify-center bg-[#132648] text-white transition-all duration-[800ms] ${isHovered ? 'h-[400px] clip-path-[polygon(0_0,0_100%,100%_100%,100%_0)] opacity-100' : 'h-0 clip-path-[polygon(0_0,0_0,100%_0,100%_0)] opacity-0'}`}
        style={{
          clipPath: isHovered
            ? 'polygon(0 0, 0 100%, 100% 100%, 100% 0)'
            : 'polygon(0 0, 0 0, 100% 0, 100% 0)',
          borderRadius: '0 0 20px 20px',
          position: 'relative',
          transform: isHovered ? 'translateY(-10px)' : 'none',
          zIndex: -10, // 기본 박스보다 낮은 z-index
        }}
      >
        {content}
      </div>
    </div>
  )
}
