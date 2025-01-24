import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper-custom.css' // Swiper 스타일 커스텀 파일 추가

import plan1 from '../assets/carousel/plan-1.png'
import plan2 from '../assets/carousel/plan-2.png'
import plan3 from '../assets/carousel/plan-3.png'
import plan4 from '../assets/carousel/plan-4.png'
import section1 from '../assets/carousel/section-1.png'
import section2 from '../assets/carousel/section-2.png'

const images = [plan1, plan2, plan3, plan4, section1, section2]

export default function Carousel() {
  return (
    <div className='w-[1280px] h-full relative mx-auto'>
      {/* Swiper 캐러셀 */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={false}
        className='w-full h-full'
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className='w-full h-full flex justify-center items-center'
          >
            <img
              src={src}
              alt={`Design ${index + 1}`}
              className='h-full object-contain'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper 페이지네이션 (커스텀 스타일 적용) */}
      <div className='swiper-pagination' />
      {/* 커스텀 네비게이션 버튼 (얇은 SVG 아이콘 적용) */}
      <div className='custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#BCBCBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M15 18l-6-6 6-6' />
        </svg>
      </div>
      <div className='custom-next absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#BCBCBC'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 18l6-6-6-6' />
        </svg>
      </div>
    </div>
  )
}
