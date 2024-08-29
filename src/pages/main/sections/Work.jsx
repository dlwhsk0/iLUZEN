import config from '../../../config/config'
import WorkCard from '../../../components/WorkCard'
import { ReactSVG } from 'react-svg'
import arrowDown from '../../../images/arrow-down.svg'
import workFolder from '../../../images/work-folder.png'
import workCertification from '../../../images/work-certification.png'

export default function Work() {
  return (
    <div
      id='업무소개'
      className='w-full px-[30px] py-[80px] flex items-center justify-center bg-gray-100'
    >
      <div className='w-full max-w-[1280px] flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col sm:items-center justify-center sm:flex-row'>
          <span className='font-bold text-[#002970] text-[30px] mr-3'>
            업무 소개 |
          </span>
          <span className='sm:text-[22px] text-gray-800'>
            끊임없는 혁신을 추구하는 {config.companyName.en}
          </span>
        </div>
        <div className='w-[90%] h-full max-w-[750px] mt-7 flex flex-col justify-center items-center gap-5'>
          <WorkCard
            content='고객으로부터 원도면(건축, 구조도면)을 접수'
            icon={workFolder}
          />
          <ReactSVG src={arrowDown} />
          <WorkCard content='설계에 필요한 체크리스트를 고객과 협의하여 확인' />
          <ReactSVG src={arrowDown} />
          <WorkCard content='원도면에 시스템 자재를 추가 설계' />
          <ReactSVG src={arrowDown} />
          <WorkCard
            content='추가 설계된 도면을 구조 검토 기관에 제출하여 검토'
            icon={workCertification}
          />
          <ReactSVG src={arrowDown} />
          <WorkCard content='구조 검토를 마친 최종 도면을 고객에게 제출' />
        </div>
      </div>
    </div>
  )
}
