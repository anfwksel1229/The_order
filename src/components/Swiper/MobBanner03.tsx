import React from 'react'
import Mob_Banner03 from '../../assets/images/banner/Mob_Banner03.png'
import '../../assets/css/main.css'

function MobBanner03() {
  return (
    <div className="Mob_Banner_container">
      <img className="banner_image03" src={Mob_Banner03} alt="" />
      <div className="Text_Wrap">
        <span
          className="big_title"
          style={{ display: 'block', margin: ' 30px 0 10px' }}
        >
          260만원 비용절감/월
        </span>
        <p className="small_title">
          25개 테이블 펍 B, 더 오더 도입 후<br />
          매월 260만원 이상의 인건비 절감 효과
        </p>
      </div>
    </div>
  )
}

export default MobBanner03
