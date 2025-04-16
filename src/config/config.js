import logo from '../assets/iluzen/iluzen-logo.png'
import logoSeparation from '../assets/iluzen/logo-separation.png'
import icon1 from '../assets/icons/icon-1.svg'
import icon2 from '../assets/icons/icon-2.svg'
import icon3 from '../assets/icons/icon-3.svg'
import icon5 from '../assets/icons/icon-5.svg'
// import icon14 from '../assets/icons/icon1-4.svg'
import desginBG from '../assets/designBG.png'
import main1 from '../assets/mainInfo/main1.webp'
import main2 from '../assets/mainInfo/main2.webp'
import main3 from '../assets/mainInfo/main3.webp'
import main4 from '../assets/mainInfo/main4.webp'
import systemDongbari from '../assets/design/systemdongbari.webp'
import systemBigye from '../assets/design/systembigye.webp'
import pipeSupport from '../assets/design/pipesupport.webp'
import ganggwanBigye from '../assets/design/ganggwanbigye.webp'

export const config = {
  logo: {
    main: {
      src: logo,
      alt: 'iluzen logo',
    },
    footer: {
      src: logoSeparation,
      alt: 'iluzen logo white',
    },
  },
  companyName: {
    en: 'iLUZEN',
    kr: '이루젠',
  },
  website: 'https://www.iluzen.com',
  brandColor: {
    brand: '#002970',
    footer: '#181818',
  },
  contact: {
    representative: '이은지',
    email: 'iluzen777@naver.com',
    phone: '02-123-4567',
    businessNumber: '807-81-02790',
    address: '',
  },
  pages: [
    {
      path: 'company',
      label: '회사개요',
    },
    {
      path: 'business',
      label: '사업분야',
    },
    {
      path: 'design',
      label: '설계품목',
    },
    {
      path: 'support',
      label: '고객지원',
    },
  ],
  main: {
    title: '"Building Confidence Through Expert Scaffold Design"',
    intro: [
      {
        title: '시스템도면',
        icon: icon1,
      },
      {
        title: '구조검토',
        icon: icon2,
      },
      {
        title: '현장상담',
        icon: icon3,
      },
      {
        title: '가설재도면',
        icon: icon1,
      },
      {
        title: '맞춤양식제작',
        icon: icon5,
      },
    ],
    services: {
      title: 'iLUZEN Service',
      items: [
        {
          id: 1,
          title: '주식회사 이루젠',
          description:
            '주식회사이루젠은 가설자재 설계도면을 전문으로 하는 기업으로, 건설 현장의 안전성과 효율성을 극대화하는 솔루션을 제공합니다. 2023년 설립된 이후, 체계적인 설계 프로세스와 구조 검토를 통해 현장에서 실현 가능한 안전한 설계를 제공하며, 업계에서 신뢰받는 파트너로 자리매김하고 있습니다.',
          link: '',
          image: main1,
        },
        {
          id: 2,
          title: '핵심 역량',
          description:
            '주식회사이루젠의 설계는 단순히 도면 작성에 그치지 않고, 고객의 요구에 맞춘 맞춤형 솔루션을 제공합니다. 풍부한 경험과 전문성, 그리고 설계 품질 향상은 경쟁력의 핵심입니다. 우리는 매뉴얼화된 교육 시스템을 통해 직원들의 역량을 높이고, 최적의 결과물을 제공하기 위해 노력하고 있습니다.',
          link: '',
          image: main2,
        },
        {
          id: 3,
          title: '제공 서비스',
          description:
            '주식회사이루젠은 시스템 동바리, 시스템 비계, 파이프 서포트, 단관 비계 등 다양한 가설자재의 설계 서비스를 제공합니다. 고객의 원도면을 바탕으로 설계에 필요한 체크리스트를 확인하고, 시스템 자재를 설계하여 최종 도면을 제출합니다. 이 도면은 구조 검토를 거쳐 안전성과 품질이 보장된 상태로 고객에게 전달됩니다.',
          link: '',
          image: main3,
        },
        {
          id: 4,
          title: '비전 및 목표',
          description:
            '이루젠은 가설자재 설계 분야에서 독보적인 전문성을 바탕으로, 건설 현장의 안전을 지키는 데 기여하고자 합니다. 우리는 끊임없는 혁신과 고객 중심의 서비스를 통해 업계를 선도하며, 국내외 시장에서의 영향력을 확장해 나갈 것입니다. 고객과 함께 성장하며, 건설 현장의 안전과 효율을 책임지는 파트너가 되겠습니다.',
          link: '',
          image: main4,
        },
      ],
    },
    design: {
      title: 'iLUZEN Design',
      description: '',
      link: '',
    },
  },
  company: {
    title: '회사개요',
    description: `주식회사 이루젠은 가설자재 설계도면 분야에서 안전과 품질을 최우선으로 삼고 있습니다.
건축 현장에서 발생할 수 있는 다양한 위험을 최소화하고, 효율적이고 안전한 시공을 가능하게 하기 위해 끊임없이 연구하고 혁신하고 있습니다.

고객의 신뢰를 바탕으로 설계의 모든 과정에서 완벽을 추구하며, 자동화 시스템을 통한 설계 품질 향상과 체계적인 구조 검토를 통해 더욱 견고한 도면을 제공하고자 합니다.

앞으로도 고객 여러분의 성공적인 프로젝트를 위해 최고의 파트너로서 함께할 것을 약속드립니다.`,
    history: {
      title: '회사연혁',
      items: [
        {
          time: '2023.04',
          content: '주식회사 이루젠 설립',
        },
        {
          time: '2024.12',
          content: '주식회사 이루젠 홈페이지 개설',
        },
      ],
    },
  },
  business: {
    title: '사업분야',
    description: '',
    items: [
      {
        id: 1,
        icon: icon1,
        title: '시스템도면\n일반가설재도면',
        description: '자재종류구별없이\n일반자재도 도능면화가능',
      },
      {
        id: 2,
        icon: icon2,
        title: '구조검토',
        description: '도면부터 구조까지 원스톱',
      },
      {
        id: 3,
        icon: icon3,
        title: '현장상담',
        description: '현장과 원활한 소통\n방문을 통한 도면협의까지',
      },
      {
        id: 4,
        icon: icon5,
        title: '맞춤양식제작',
        description: '보유자재에 및 도면양식제작',
      },
    ],
    backgroundImage: desginBG,
  },
  design: {
    title: '설계품목',
    description: '',
    items: [
      {
        id: 1,
        src: systemDongbari,
        title: '시스템동바리',
        content:
          '이루젠은 건축 현장에서 보 및 슬라브 콘크리트 타설 시 거푸집을 안전하게 지지할 수 있도록 최적의 시스템 동바리 설계를 제공합니다.\n\n현장 조건에 맞춰 규격화된 자재를 효과적으로 배치하여 설치의 편리함과 안정성을 극대화합니다.\n\n우리는 락핀(lock-pin) 타입의 체결 방식을 반영한 설계를 통해, 신속하고 안전한 시공을 지원합니다.',
      },
      {
        id: 2,
        src: systemBigye,
        title: '시스템비계',
        content:
          '시스템 비계 설계는 건물 외벽 작업의 안전과 효율을 보장하는 중요한 요소입니다.\n\n이루젠은 현장의 요구에 맞춰 최적의 시스템 비계 배치 설계를 제공합니다. 규격화된 자재를 기반으로, 설치의 용이성과 작업자의 안전을 최우선으로 고려한 설계 솔루션을 제공합니다.',
      },
      {
        id: 3,
        src: pipeSupport,
        title: '파이프써포트',
        content:
          '이루젠의 파이프 서포트 설계는 건축 구조물의 거푸집을 견고하게 지지할 수 있도록 최적화된 설계 솔루션을 제공합니다.\n\n다양한 규격의 자재를 고려하여, 현장에 맞춤형 설계 방안을 제시하며, 효율적이고 안전한 시공을 위한 정밀한 도면을 작성합니다.',
      },
      {
        id: 4,
        src: ganggwanBigye,
        title: '강관비계',
        content:
          '강관 비계는 건축 현장의 외벽 작업을 위한 필수적인 지지 구조물로, 이루젠은 다양한 현장 조건에 맞춘 최적의 단관 비계 설계를 제공합니다.\n\n유연한 조립과 다양한 구조물에 대응할 수 있도록 설계하여, 안전하고 효율적인 작업 환경을 보장합니다.',
      },
    ],
  },
  support: {
    title: '고객지원',
    description: '',
    items: [],
  },
}

export default config
