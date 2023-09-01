import React from 'react'
import BannerImage01 from '../../assets/images/banner/main_banner01.png'
import '../../assets/css/main.css'

function Banner01() {
  return (
    <div className="flex Banner_container_01">
      <div>
        <h3>업계 최저가 + 1개월 무료 사용</h3>

        <p
          className="small_title"
          style={{
            marginBottom: '20px',
          }}
        >
          비용 절감 회전율 상승 매출 확대
        </p>
        <span className="big_title">
          주문은 <br />
          더 오더가 <br />
          도와드립니다.
        </span>
      </div>
      <img className="banner_image01" src={BannerImage01} alt="" />
    </div>
  )
}

export default Banner01
