import PropTypes from 'prop-types'
import { useState } from 'react'

export function ServiceBox({ src, alt, title, content }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='w-full h-full relative transition-all duration-[800ms] group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 이미지 */}
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover transition-all duration-[800ms] group-hover:scale-110'
        loading='lazy'
        width='600'
        height='400'
      />
      {/* 마우스를 올렸을 때만 어두워지는 그라데이션 */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-all duration-[800ms]'></div>
      {/*기존 반투명 검은색 오버레이 (조절 가능)*/}
      <div className='absolute inset-0 bg-black/30'></div>
      {/* 콘텐츠 영역 */}
      <div className='absolute inset-0 m-[12px] p-[15px] border-white/50 border-[1.5px] rounded-lg flex flex-col justify-end items-start text-white transition-all duration-[800ms] group-hover:justify-center'>
        <span className='text-[20px] font-bold mb-[5px] transition-all duration-[800ms] group-hover:text-[24px]'>
          {title}
        </span>
        {/* 설명은 상태에 따라 렌더링 */}
        {isHovered && (
          <span className='text-start transition-all duration-[800ms]'>
            {content}
          </span>
        )}
      </div>
    </div>
  )
}

ServiceBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
