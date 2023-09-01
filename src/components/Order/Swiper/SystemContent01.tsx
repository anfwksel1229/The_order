import React from 'react'
import SystemBanner01 from '../../../assets/images/Systembanner/SystemBanner01.png'
import '../../../assets/css/Order.css'

function SystemContent01() {
  const isMobile = window.innerWidth <= 767
  const BRText = isMobile ? (
    <React.Fragment>
      포스에 기반한
      <br />
      진짜 테이블 오더 시스템
    </React.Fragment>
  ) : (
    '포스에 기반한 진짜 테이블 오더 시스템'
  )

  return (
    <div id="Content_Wrap">
      <div className="table_mockup">
        <img src={SystemBanner01} alt="" />
      </div>
      <p>{BRText}</p>
    </div>
  )
}

export default SystemContent01
