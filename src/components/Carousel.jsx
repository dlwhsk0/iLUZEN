import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import design1 from '../assets/carousel/design-1.png'
import design2 from '../assets/carousel/design-2.png'
import design3 from '../assets/carousel/design-3.png'

const images = [design1, design2, design3, design1, design2, design3] // 무한 루프 효과용 중복 추가

export default function Carousel() {
  return (
    <div className='w-full h-full px-10 relative'>
      {/* Swiper 캐러셀 */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }} // 네비게이션 아이콘 커스텀 적용
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={false}
        className='w-[1280px] h-full'
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

        {/* 커스텀 네비게이션 버튼 (얇은 SVG 아이콘 적용) */}
        <div className='custom-prev absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
          <svg
            width='30'
            height='30'
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
        <div className='custom-next absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10'>
          <svg
            width='30'
            height='30'
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
      </Swiper>
    </div>
  )
}
