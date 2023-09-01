import React from 'react'
import Mob_Banner01 from '../../assets/images/banner/Mob_Banner01.png'
import '../../assets/css/main.css'

function MobBanner01() {
  return (
    <div className="Mob_Banner_container">
      <img className="banner_image01" src={Mob_Banner01} alt="" />
      <div className="Text_Wrap">
        <p
          className="small_title"
          style={{
            margin: '20px 0 0',
            fontSize: '1.5rem',
            fontWeight: '900',
            color: '#c90040',
          }}
        >
          업계 최저가 + 1개월 무료 사용​
        </p>
        <p
          className="small_title"
          style={{
            margin: '10px 0',
          }}
        >
          비용 절감 회전율 상승 매출 확대
        </p>
        <span className="big_title">더 오더가 도와드립니다.</span>
      </div>
    </div>
  )
}

export default MobBanner01
