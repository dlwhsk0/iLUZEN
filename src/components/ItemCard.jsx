import PropTypes from 'prop-types'

ItemCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default function ItemCard({ src, title }) {
  return (
    <div className='relative w-[300px] h-[620px] flex items-center justify-center rounded-2xl overflow-hidden group'>
      <img src={src} alt={title} className='h-full object-cover' />
      <span className='absolute top-0 z-10 mt-[30px] text-white font-bold text-[22px]'>
        {title}
      </span>
      <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60'></div>
    </div>
  )
}
