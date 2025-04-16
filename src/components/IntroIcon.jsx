import { ReactSVG } from 'react-svg'
import PropTypes from 'prop-types'

export default function IntroIcon({ icon, text }) {
  return (
    <div className='w-[100px] flex flex-col items-center justify-center gap-[8px]'>
      <div className='w-[80px] h-[80px] flex items-center justify-center border-2 border-white/30 rounded-full text-white'>
        <ReactSVG
          src={icon}
          wrapperClassName='w-[50px] h-[50px]'
          className='text-white/30'
        />
      </div>
      <span className='text-white/80 text-[13px] tracking-widest'>{text}</span>
    </div>
  )
}

IntroIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
