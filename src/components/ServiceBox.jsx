import PropTypes from 'prop-types'

export function ServiceBox({ src, alt, text }) {
  return (
    <div className='w-full h-full'>
      <img src={src} alt={alt} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='absolute inset-0 m-[12px] border-white/50 border-[1.5px] rounded-lg'>
        <span className='absolute bottom-4 left-4 text-white text-[25px] font-bold'>
          {text}
        </span>
      </div>
    </div>
  )
}

ServiceBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
