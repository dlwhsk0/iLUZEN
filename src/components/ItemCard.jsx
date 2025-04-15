import PropTypes from 'prop-types'

export default function ItemCard({ src, title, content }) {
  return (
    <div className='relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden group lg:h-full md:h-[400px] sm:h-[300px] transition-all duration-[800ms]'>
      <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60 transition-all duration-[800ms]'></div>

      <img
        src={src}
        alt={title}
        className='w-full h-full object-cover transition-all duration-[800ms] group-hover:scale-110'
        loading='lazy'
        width='600'
        height='400'
      />
      <div
        className={`absolute z-10 w-full h-full px-4 lg:py-[10%] py-[8%] flex flex-col gap-2 group-hover:justify-center items-center text-white transition-all duration-[800ms]`}
      >
        <span className='font-bold md:text-[20px] sm:text-[18px] text-[15px] transition-all duration-[800ms] group-hover:text-[24px]'>
          {title}
        </span>
        <span
          className={`hidden group-hover:block text-[11px] sm:text-[16px] overflow-scroll transition-all duration-[800ms]`}
        >
          {content}
        </span>
      </div>
      <div
        className={`absolute inset-0 bg-black opacity-0 transition-all duration-[800ms] group-hover:opacity-60`}
      />
    </div>
  )
}

ItemCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
}
