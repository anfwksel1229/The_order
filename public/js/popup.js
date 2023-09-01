// const axios = require('axios')

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('.Mail_Wrap')
//   const errors = {}

//   const formatPhoneNumber = (phoneNumber) => {
//     const cleaned = ('' + phoneNumber).replace(/\D/g, '')
//     const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/)

//     if (!match) return phoneNumber

//     return [match[1], match[2], match[3]].filter((group) => !!group).join('-')
//   }

//   const sendEmail = (e) => {
//     e.preventDefault()

//     const PhoneValue = form.Phone.value
//     const storeNameValue = form.storeName.value
//     const industryValue = form.industry.value
//     const placeValue = form.Place.value
//     const tableValue = form.Table.value
//     const questionsValue = form.Questions.value

//     const phoneRegExp = /^010-[0-9]{3,4}-[0-9]{4}$/

//     if (!PhoneValue.trim() || !phoneRegExp.test(PhoneValue)) {
//       errors.Phone = true
//     }
//     if (!storeNameValue.trim()) {
//       errors.storeName = true
//     }
//     if (!industryValue.trim()) {
//       errors.industry = true
//     }
//     if (!placeValue.trim()) {
//       errors.Place = true
//     }
//     if (!tableValue.trim()) {
//       errors.Table = true
//     }
//     if (!questionsValue.trim()) {
//       errors.Questions = true
//     }

//     if (Object.keys(errors).length > 0) {
//       // 에러 처리 로직 작성
//       return
//     }

//     const formData = {
//       phoneNumber: PhoneValue,
//       storeName: storeNameValue,
//       type: industryValue,
//       region: placeValue,
//       tableCount: tableValue,
//       content: questionsValue,
//     }

//     axios
//       .post('http://the-order.modiapp.net:8888/send/email', formData) // 필요에 따라 URL 수정
//       .then((response) => {
//         alert('상담신청이 접수되었습니다.')
//         form.reset()
//         location.reload() // 페이지 새로고침
//       })
//       .catch((error) => {
//         console.error('상담신청 접수실패:', error)
//         alert('상담신청 접수실패.')
//       })
//   }

//   form.addEventListener('submit', sendEmail)
// })
