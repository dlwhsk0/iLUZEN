import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function ImageModal({ imageSrc, onClose }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
      setIsImageLoaded(true)
    }
  }, [imageSrc])

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto'
      onClick={onClose}
    >
      <div className='relative my-8' onClick={(e) => e.stopPropagation()}>
        <button
          className='absolute -top-8 -right-8 text-white hover:text-gray-300'
          onClick={onClose}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 6L6 18M6 6l12 12' />
          </svg>
        </button>
        {!isImageLoaded && (
          <div className='flex items-center justify-center w-full h-32'>
            <div className='w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin'></div>
          </div>
        )}
        <img
          src={imageSrc}
          alt='Enlarged design'
          className='max-h-[90vh] object-contain'
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
      </div>
    </div>
  )
}

ImageModal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}
