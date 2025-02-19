import Timeline from '../../components/Timeline'

export default function Company() {
  return (
    <div className='w-[1280px] h-full mx-auto'>
      <div className='text-[25px] mb-[60px] font-light'>회사개요</div>
      <div className='w-full flex justify-between'>
        <div className='w-[40%]'>
          <Timeline />
        </div>
        <div className='w-[57%] text-[15px] leading-loose'>
          주식회사 이루젠은 가설자재 설계도면 분야에서 안전과 품질을 최우선으로
          삼고 있습니다.
          <br />
          건축 현장에서 발생할 수 있는 다양한 위험을 최소화하고, 효율적이고
          안전한 시공을 가능하게 하기 위해 끊임없이 연구하고 혁신하고 있습니다.
          <br />
          <br />
          고객의 신뢰를 바탕으로 설계의 모든 과정에서 완벽을 추구하며, 자동화
          시스템을 통한 설계 품질 향상과 체계적인 구조 검토를 통해 더욱 견고한
          도면을 제공하고자 합니다.
          <br />
          <br />
          앞으로도 고객 여러분의 성공적인 프로젝트를 위해 최고의 파트너로서
          함께할 것을 약속드립니다.
        </div>
      </div>
    </div>
  )
}
