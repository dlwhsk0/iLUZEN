import PropTypes from 'prop-types'

ItemCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default function ItemCard({ src, title, content }) {
  return (
    <div className='relative w-full h-[200px] flex items-center justify-center rounded-2xl overflow-hidden group lg:h-[620px] md:h-[400px] sm:h-[300px] transition-all duration-[800ms]'>
      <img src={src} alt={title} className='w-full h-full object-cover' />
      <div className='absolute z-10 w-full h-full px-4 lg:py-[10%] py-[8%] flex flex-col gap-2 group-hover:justify-center items-center text-white'>
        <span className='font-bold md:text-[20px] sm:text-[18px] text-[15px]'>
          {title}
        </span>
        <span className='hidden group-hover:block text-[11px] sm:text-[16px] overflow-scroll'>
          {content}
        </span>
      </div>
      <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60' />
    </div>
  )
}
