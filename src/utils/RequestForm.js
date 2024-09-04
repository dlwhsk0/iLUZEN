export const initialFormState = {
  companyName: '',
  customerName: '',
  contact: '',
  email: '',
  dueDate: '',
  structureReview: false,
  attachedDrawing: false,
  systemDongbari: {
    installationArea: '',
    type: '',
    yokeDirection: '',
    spacing: '',
    lowerRegulation: '',
    structureType: '',
    insulation: '',
    platform: '',
    eyebrowInstallation: false,
  },
  systemScaffold: {
    installationArea: '',
    type: '',
    yokeDirection: '',
    spacing: '',
    lowerRegulation: '',
    structureType: '',
    insulation: '',
    platform: '',
    eyebrowInstallation: false,
  },
  specialNotes: '',
}

export const validateForm = (formData) => {
  const newErrors = {}
  // 필수 항목 검증
  if (!formData.companyName)
    newErrors.companyName = '* 회사명은 필수 입력 항목입니다.'
  if (!formData.customerName)
    newErrors.customerName = '* 고객명은 필수 입력 항목입니다.'
  if (!formData.contact) newErrors.contact = '* 연락처는 필수 입력 항목입니다.'
  if (!formData.email) newErrors.email = '* 이메일은 필수 입력 항목입니다.'
  if (!formData.dueDate)
    newErrors.dueDate = '* 마감 희망일은 필수 입력 항목입니다.'
  if (formData.structureReview === undefined)
    newErrors.structureReview = '* 구조검토 여부는 필수 입력 항목입니다.'
  if (formData.attachedDrawing === undefined)
    newErrors.attachedDrawing = '* 도면첨부 여부는 필수 입력 항목입니다.'

  // 연락처 유효성 검사
  const contactPattern = /^[0-9]{10,15}$/
  if (formData.contact && !contactPattern.test(formData.contact)) {
    newErrors.contact = '* 유효한 연락처를 입력해주세요. (숫자만 허용, 10~15자)'
  }

  // 이메일 유효성 검사
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (formData.email && !emailPattern.test(formData.email)) {
    newErrors.email =
      '* 유효한 이메일 주소를 입력해주세요. (예: iluzen@iluzen.com)'
  }

  // if (!formData.systemDongbari.installationArea)
  //   newErrors['systemDongbari.installationArea'] =
  //     '* 설치구간은 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.type)
  //   newErrors['systemDongbari.type'] = '* 타입은 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.yokeDirection)
  //   newErrors['systemDongbari.yokeDirection'] =
  //     '* 멍에방향은 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.spacing)
  //   newErrors['systemDongbari.spacing'] = '* 이격거리는 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.lowerRegulation)
  //   newErrors['systemDongbari.lowerRegulation'] =
  //     '* 하부규정은 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.structureType)
  //   newErrors['systemDongbari.structureType'] = '* 구조는 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.insulation)
  //   newErrors['systemDongbari.insulation'] = '* 단열재는 필수 입력 항목입니다.'
  // if (!formData.systemDongbari.platform)
  //   newErrors['systemDongbari.platform'] = '* 발판은 필수 입력 항목입니다.'
  // if (formData.systemDongbari.eyebrowInstallation === undefined)
  //   newErrors['systemDongbari.eyebrowInstallation'] =
  //     '* 눈썹보 설치여부는 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.installationArea)
  //   newErrors['systemScaffold.installationArea'] =
  //     '* 설치구간은 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.type)
  //   newErrors['systemScaffold.type'] = '* 타입은 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.yokeDirection)
  //   newErrors['systemScaffold.yokeDirection'] =
  //     '* 멍에방향은 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.spacing)
  //   newErrors['systemScaffold.spacing'] = '* 이격거리는 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.lowerRegulation)
  //   newErrors['systemScaffold.lowerRegulation'] =
  //     '* 하부규정은 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.structureType)
  //   newErrors['systemScaffold.structureType'] = '* 구조는 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.insulation)
  //   newErrors['systemScaffold.insulation'] = '* 단열재는 필수 입력 항목입니다.'
  // if (!formData.systemScaffold.platform)
  //   newErrors['systemScaffold.platform'] = '* 발판은 필수 입력 항목입니다.'
  // if (formData.systemScaffold.eyebrowInstallation === undefined)
  //   newErrors['systemScaffold.eyebrowInstallation'] =
  //     '* 눈썹보 설치여부는 필수 입력 항목입니다.'
  return newErrors
}
