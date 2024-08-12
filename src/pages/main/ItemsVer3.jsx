import ItemCard from '../../components/ItemCard'
import pipeSupport from '../../images/pipesupport.png'
import systemDongbari from '../../images/systemdongbari.png'
import systemBigye from '../../images/systembigye.png'
import ganggwanBigye from '../../images/ganggwanbigye.png'
import config from '../../config/config'

export default function ItemsVer3() {
  return (
    <div
      id='설계품목'
      className='w-full px-[60px] flex flex-col items-center justify-between gap-7'
    >
      <div>
        <span className='font-bold text-[#002970] text-[30px] mr-3'>
          설계 품목 |
        </span>
        <span className='text-[22px] text-gray-800'>
          끊임없는 혁신을 추구하는 {config.companyName}
        </span>
      </div>

      <div className='w-full max-w-[1280px] flex items-center justify-center gap-10'>
        <ItemCard src={systemDongbari} title='시스템동바리' />
        <ItemCard src={systemBigye} title='시스템비계' />
        <ItemCard src={pipeSupport} title='파이프써포트' />
        <ItemCard src={ganggwanBigye} title='강관비계' />
      </div>
    </div>
  )
}
