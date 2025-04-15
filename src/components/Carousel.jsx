import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper-custom.css' // Swiper 스타일 커스텀 파일 추가
import ImageModal from './ImageModal'

// 캐러셀용 webp 이미지
import plan1Webp from '../assets/carousel/plan-1.webp'
import plan2Webp from '../assets/carousel/plan-2.webp'
import plan3Webp from '../assets/carousel/plan-3.webp'
import plan4Webp from '../assets/carousel/plan-4.webp'
import section1Webp from '../assets/carousel/section-1.webp'
import section2Webp from '../assets/carousel/section-2.webp'

// 모달용 원본 이미지
import plan1Original from '../assets/carousel/plan-1.png'
import plan2Original from '../assets/carousel/plan-2.png'
import plan3Original from '../assets/carousel/plan-3.png'
import plan4Original from '../assets/carousel/plan-4.png'
import section1Original from '../assets/carousel/section-1.png'
import section2Original from '../assets/carousel/section-2.png'

const webpImages = [
  plan1Webp,
  plan2Webp,
  plan3Webp,
  plan4Webp,
  section1Webp,
  section2Webp,
]
const originalImages = [
  plan1Original,
  plan2Original,
  plan3Original,
  plan4Original,
  section1Original,
  section2Original,
]

export default function Carousel() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

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
        {webpImages.map((src, index) => (
          <SwiperSlide
            key={index}
            className='w-full h-full flex justify-center items-center'
          >
            <div
              className='bg-white cursor-pointer'
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`Design ${index + 1}`}
                className='h-full object-contain my-[10px]'
                loading='lazy'
                width='400'
                height='300'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 모달 */}
      {selectedImageIndex !== null && (
        <ImageModal
          imageSrc={originalImages[selectedImageIndex]}
          onClose={handleCloseModal}
        />
      )}

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
