import React from 'react'

const timelineData = [
  { date: '2023. 4', text: '주식회사 이루젠 설립' },
  { date: '2024.12', text: '주식회사 이루젠 홈페이지 개설' },
]

export default function Timeline() {
  return (
    <div className='relative ml-8'>
      {/* 전체 연한 세로선 */}
      <div className='absolute left-[4px] top-4 w-[2px] h-[300px] bg-[#E3E3E3]'></div>

      {timelineData.map((item, index) => (
        <div key={index} className='relative flex items-center mb-[35px]'>
          {/* 마커(점) */}
          <div className='relative w-[10px] h-[10px] bg-[#A1A1A1] rounded-full'></div>

          {/* 진한 세로선 (점들 사이의 연결선) */}
          {index !== timelineData.length - 1 && (
            <div className='absolute left-[4px] top-[15px] w-[2px] h-[55px] bg-[#A1A1A1]'></div>
          )}

          {/* 날짜 & 텍스트 */}
          <div className='flex items-center gap-[25px] ml-[35px]'>
            <span className='font-light text-gray-700'>{item.date}</span>
            <span className=''>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
