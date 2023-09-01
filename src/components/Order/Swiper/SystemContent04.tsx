import React from 'react'
import SystemBanner04 from '../../../assets/images/Systembanner/SystemBanner04.png'
import '../../../assets/css/Order.css'

function SystemContent04() {
  const isMobile = window.innerWidth <= 767
  const BRText = isMobile ? (
    <React.Fragment>원하는 수량만큼 추가 후 주문 가능</React.Fragment>
  ) : (
    '원하는 수량만큼 추가 후 주문 가능'
  )
  return (
    <div id="Content_Wrap">
      <div className="table_mockup">
        <img src={SystemBanner04} alt="" />
      </div>
      <p>{BRText}</p>
    </div>
  )
}

export default SystemContent04
