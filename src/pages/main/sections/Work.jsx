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
      <div className='w-full max-w-[1280px] flex flex-col gap-7 justify-center items-center'>
        <div className='w-full flex flex-col sm:items-center justify-center sm:flex-row'>
          <span className='font-bold text-[#002970] text-[30px] mr-3'>
            업무 소개 |
          </span>
          <span className='sm:text-[22px] text-gray-800'>
            끊임없는 혁신을 추구하는 {config.companyName.en}
          </span>
        </div>
        <div className='w-[90%] h-full max-w-[750px] flex flex-col justify-center items-center gap-5'>
          <WorkCard content='1. 도면 접수' icon={workFolder} />
          <ReactSVG src={arrowDown} />
          <WorkCard content='2. 체크리스트 협의' />
          <ReactSVG src={arrowDown} />
          <WorkCard content='3. 시스템 자재 배치 설계' />
          <ReactSVG src={arrowDown} />
          <WorkCard content='4. 구조 검토 및 인증' icon={workCertification} />
          <ReactSVG src={arrowDown} />
          <WorkCard content='5. 최종 도면 제출' />
        </div>
      </div>
    </div>
  )
}
