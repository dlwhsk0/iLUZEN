export default function IntroScrollBar() {
  return (
    <div className='absolute bottom-[50px] w-[4px] h-[100px] bg-black bg-opacity-40 overflow-hidden z-10'>
      <span className='absolute top-1/4 left-0 z-20 w-full h-[50px] bg-white animate-introScroll transform -translate-y-[300%]'></span>
    </div>
  )
}
