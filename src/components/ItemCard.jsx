import PropTypes from 'prop-types'

ItemCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function ItemCard({ src, title }) {
  return (
    <div className='relative w-full h-[200px] flex items-center justify-center rounded-2xl overflow-hidden group lg:h-[620px] md:h-[400px] sm:h-[300px] transition-all duration-[800ms]'>
      <img src={src} alt={title} className='w-full h-full object-cover' />
      <span className='absolute top-0 z-10 mt-[10%] text-white font-bold md:text-[22px] text-[18px]'>
        {title}
      </span>
      <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60' />
    </div>
  )
}
