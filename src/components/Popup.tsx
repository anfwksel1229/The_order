import React, { useRef, useState } from 'react'

import '../assets/css/Popup.css'
import CloseBtn from '../assets/images/icon/CloseBtn.png'
// import emailjs from '@emailjs/browser'
import axios from 'axios'

function Popup({ onClose }) {
  const form = useRef()
  const [errors, setErrors] = useState({})

  const formatPhoneNumber = (phoneNumber) => {
    // 휴대폰 번호를 입력할 때 자동으로 "-"를 추가하는 로직
    const cleaned = ('' + phoneNumber).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/)

    if (!match) return phoneNumber

    return [match[1], match[2], match[3]].filter((group) => !!group).join('-')
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const PhoneValue = form.current.Phone.value
    const storeNameValue = form.current.storeName.value
    const industryValue = form.current.industry.value
    const placeValue = form.current.Place.value
    const tableValue = form.current.Table.value
    const questionsValue = form.current.Questions.value

    const errors = {}

    // 휴대폰 번호 검사용 정규식
    const phoneRegExp = /^010-[0-9]{3,4}-[0-9]{4}$/

    // 필수 입력 필드 확인
    if (!PhoneValue.trim() || !phoneRegExp.test(PhoneValue)) {
      errors.Phone = true
    }
    if (!storeNameValue.trim()) {
      errors.storeName = true
    }
    if (!industryValue.trim()) {
      errors.industry = true
    }
    if (!placeValue.trim()) {
      errors.Place = true
    }
    if (!tableValue.trim()) {
      errors.Table = true
    }
    if (!questionsValue.trim()) {
      errors.Questions = true
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    const formData = {
      phoneNumber: PhoneValue,
      storeName: storeNameValue,
      type: industryValue,
      region: placeValue,
      tableCount: tableValue,
      content: questionsValue,
    }

    axios
      .post('http://the-order.modiapp.net:8888/send/email', formData) // Modify the URL as needed
      .then((response) => {
        alert('상담신청이 접수되었습니다.')
        form.current.reset()
        window.location.reload() // 페이지 새로고침
      })
      .catch((error) => {
        console.error('상담신청 접수실패:', error)
        alert('상담신청 접수실패.')
      })
  }

  return (
    <div className="PopupContainer">
      <div className="Popup">
        <div>
          <h2>상담 및 도입 문의하기</h2>
          <h3>도입 문의 및 상담 : 1533-3416</h3>
          <p>상담 신청을 통하여 맞춤 견적을 받아보세요.</p>
          <span>※ 설치비 무료 이벤트 진행중!</span>

          <form className="Mail_Wrap" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="Phone">연락처</label>
              <input
                type="tel" // 휴대폰 번호를 입력 받을 수 있는 input 타입
                id="Phone"
                placeholder="휴대폰 번호를 입력해 주세요. (예: 010-1234-5678)"
                name="Phone"
                className={errors.Phone ? 'error' : ''}
                maxLength="13" // 최대 입력 길이를 13으로 제한
                onInput={(e) => {
                  const phoneNumber = e.target.value
                  const formattedPhoneNumber = formatPhoneNumber(phoneNumber)
                  e.target.value = formattedPhoneNumber
                }}
              />
            </div>
            {errors.Phone && (
              <span
                className="error-message"
                style={{
                  color: 'red',
                  fontFamily: "'Noto Sans KR', sans-serif",
                  marginRight: '40px',
                }}
              >
                올바른 휴대폰 번호를 입력해 주세요.
              </span>
            )}
            <div>
              <label htmlFor="storeName">매장명</label>
              <input
                type="text"
                id="storeName"
                placeholder="매장명을 입력해 주세요."
                name="storeName"
                className={errors.storeName ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="industry">업종</label>
              <select
                id="industry"
                name="industry"
                className={errors.industry ? 'error' : ''}
              >
                <option value="" disabled selected>
                  매장명을 입력해 주세요.
                </option>
                <option value="서비스">서비스</option>
                <option value="외식음료">외식음료</option>
                <option value="도.소매">도.소매</option>
                <option value="자영업">자영업</option>
                <option value="전문직">전문직</option>
              </select>
            </div>
            <div>
              <label htmlFor="Place">장소</label>
              <select
                id="Place"
                name="Place"
                className={errors.Place ? 'error' : ''}
              >
                <option value="" disabled selected>
                  지역을 선택해 주세요.
                </option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="광주광역시 ">광주광역시 </option>
                <option value="대전광역시  ">대전광역시 </option>
                <option value="울산광역시">울산광역시</option>
                <option value="경기도">경기도</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="제주특별자치도    ">제주특별자치도 </option>
              </select>
            </div>
            <div>
              <label htmlFor="Table">테이블 수</label>
              <input
                type="text"
                id="Table"
                name="Table"
                placeholder="테이블 개수를 입력해 주세요."
                className={errors.Table ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="Questions">문의사항</label>
              <textarea
                name="Questions"
                id="Questions"
                cols="30"
                rows="10"
                className={errors.Questions ? 'error' : ''}
              ></textarea>
            </div>

            {/* 버튼을 form 요소 안으로 이동 */}
            <button type="submit">
              <span>상담 신청하기</span>
            </button>
          </form>

          <h3 className="web">도입 문의 및 상담 : 1533-3416</h3>

          <img src={CloseBtn} alt="" onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default Popup
