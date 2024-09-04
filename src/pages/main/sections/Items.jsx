import ItemCard from '../../../components/ItemCard'
import pipeSupport from '../../../images/pipesupport.png'
import systemDongbari from '../../../images/systemdongbari.png'
import systemBigye from '../../../images/systembigye.png'
import ganggwanBigye from '../../../images/ganggwanbigye.png'
import config from '../../../config/config'

export default function Items() {
  return (
    <div
      id='설계품목'
      className='w-full px-[30px] sm:px-[60px] flex items-center justify-center transition-all duration-[800ms]'
    >
      <div className='w-full max-w-[1280px] flex flex-col justify-center items-center gap-7'>
        <div className='w-full flex flex-col sm:items-center justify-center sm:flex-row'>
          <span className='font-bold text-[#002970] text-[30px] mr-3'>
            설계 품목 |
          </span>
          <span className='sm:text-[22px] text-gray-800'>
            끊임없는 혁신을 추구하는 {config.companyName.en}
          </span>
        </div>
        <div className='w-full h-full grid grid-cols-2 gap-5 lg:grid-cols-4'>
          <ItemCard
            src={systemDongbari}
            title='시스템동바리'
            content={
              '주식회사 이루젠은 건축 현장에서 보 및 슬라브 콘크리트 타설 시 거푸집을 안전하게 지지할 수 있도록 최적의 시스템 동바리 설계를 제공합니다. 현장 조건에 맞춰 규격화된 자재를 효과적으로 배치하여 설치의 편리함과 안정성을 극대화합니다. 우리는 락핀(lock-pin) 타입의 체결 방식을 반영한 설계를 통해, 신속하고 안전한 시공을 지원합니다.'
            }
          />
          <ItemCard
            src={systemBigye}
            title='시스템비계'
            content={
              '시스템 비계 설계는 건물 외벽 작업의 안전과 효율을 보장하는 중요한 요소입니다. 이루젠은 현장의 요구에 맞춰 최적의 시스템 비계 배치 설계를 제공합니다. 규격화된 자재를 기반으로, 설치의 용이성과 작업자의 안전을 최우선으로 고려한 설계 솔루션을 제공합니다.'
            }
          />
          <ItemCard
            src={pipeSupport}
            title='파이프써포트'
            content={
              '이루젠의 파이프 서포트 설계는 건축 구조물의 거푸집을 견고하게 지지할 수 있도록 최적화된 설계 솔루션을 제공합니다. 다양한 규격의 자재를 고려하여, 현장에 맞춤형 설계 방안을 제시하며, 효율적이고 안전한 시공을 위한 정밀한 도면을 작성합니다.'
            }
          />
          <ItemCard
            src={ganggwanBigye}
            title='강관비계'
            content={
              '강관 비계는 건축 현장의 외벽 작업을 위한 필수적인 지지 구조물로, 이루젠은 다양한 현장 조건에 맞춘 최적의 단관 비계 설계를 제공합니다. 유연한 조립과 다양한 구조물에 대응할 수 있도록 설계하여, 안전하고 효율적인 작업 환경을 보장합니다.'
            }
          />
        </div>
      </div>
    </div>
  )
}
