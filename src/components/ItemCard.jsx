import PropTypes from 'prop-types'
import config from '../config/config'

export default function ItemCard({ id }) {
  const item = config.design.items.find((item) => item.id === id)

  if (!item) return null

  return (
    <div className='relative w-full h-[300px] sm:h-[650px] flex items-center justify-center rounded-lg overflow-hidden group transition-all duration-[800ms]'>
      <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60 transition-all duration-[800ms]'></div>

      <img
        src={item.src}
        alt={item.title}
        className='w-full h-full object-cover transition-all duration-[800ms] group-hover:scale-110'
        loading='lazy'
        width='600'
        height='400'
      />
      <div
        className={`absolute z-10 w-full h-full sm:pt-8 px-4 flex flex-col gap-4 sm:justify-start justify-center group-hover:justify-center items-center text-white transition-all duration-[800ms]`}
      >
        <span className='font-bold text-[20px] h-[24px] flex items-center justify-center transition-all duration-[800ms] group-hover:scale-110 transform origin-center text-gray-100'>
          {item.title}
        </span>
        <span
          className={`hidden group-hover:block text-[14px] sm:text-[16px] overflow-scroll transition-all duration-[800ms] whitespace-pre-line`}
        >
          {item.content}
        </span>
      </div>
      <div
        className={`absolute inset-0 bg-black opacity-0 transition-all duration-[800ms] group-hover:opacity-60`}
      />
    </div>
  )
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
}
