import emailjs from 'emailjs-com'

export const sendEmails = (formData) => {
  const templateParams = {
    ...formData,
    structureReview: formData.structureReview ? '예' : '아니요',
    attachedDrawing: formData.attachedDrawing ? '예' : '아니요',
    systemDongbari: {
      ...formData.systemDongbari,
      eyebrowInstallation: formData.systemDongbari.eyebrowInstallation
        ? '예'
        : '아니요',
    },
    systemScaffold: {
      ...formData.systemScaffold,
      eyebrowInstallation: formData.systemScaffold.eyebrowInstallation
        ? '예'
        : '아니요',
    },
  }

  const adminEmailPromise = emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_API_KEYS
  )

  const customerEmailPromise = emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_CUSTOMER_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_API_KEYS
  )

  return Promise.all([adminEmailPromise, customerEmailPromise])
}
