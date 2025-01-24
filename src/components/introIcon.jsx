export default function IntroIcon({ icon, text }) {
  return (
    <div className='w-[120px] flex flex-col items-center justify-center gap-[4px]'>
      <span className='w-[90px] h-[90px] flex items-center justify-center border-2 border-white/30 rounded-full'>
        <img src={icon} alt='icon' className='w-[50px] h-[50px]' />
      </span>
      <span className='text-white/80 text-[13px] tracking-widest'>{text}</span>
    </div>
  )
}
