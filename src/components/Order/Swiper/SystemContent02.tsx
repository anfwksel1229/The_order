import React from 'react'
import SystemBanner02 from '../../../assets/images/Systembanner/SystemBanner02.png'
import '../../../assets/css/Order.css'

function SystemContent02() {
  return (
    <div id="Content_Wrap">
      <div className="table_mockup">
        <img src={SystemBanner02} alt="" />
      </div>
      <p>내가 시킨 주문 내역을 확인 가능</p>
    </div>
  )
}

export default SystemContent02
