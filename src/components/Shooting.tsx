import React, { useState, useEffect } from 'react'
import '../assets/css/Shooting.css'

import Shooting01 from '../components/Shooting/Shooting01.tsx'
import Shooting02 from '../components/Shooting/Shooting02.tsx'

function Shooting() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const BRText = isMobile ? (
    <React.Fragment>
      점주님들의 메뉴판에 들어갈 음식 사진들을
      <br /> 전문 촬영업체가 무료로촬영해 드립니다.
    </React.Fragment>
  ) : (
    `점주님들의 메뉴판에 들어갈 음식 사진들을 전문 촬영업체가 무료로 촬영해드립니다.`
  )
  return (
    <div id="Shooting_Wrap">
      <div className="Shooting_title">
        <p>THE order</p>
        <p>음식 사진 무료촬영 지원</p>
        <span>{BRText}</span>
      </div>

      {isMobile ? <Shooting01 /> : <Shooting02 />}

      <p>*출장비는 별도로 청구됩니다.</p>
    </div>
  )
}

export default Shooting
