import React from 'react'
import Mob_Banner02 from '../../assets/images/banner/Mob_Banner02.png'
import '../../assets/css/main.css'

function MobBanner02() {
  return (
    <div className="Mob_Banner_container">
      <img className="banner_image02" src={Mob_Banner02} alt="" />
      <div className="Text_Wrap">
        <span
          className="big_title"
          style={{ display: 'block', margin: ' 30px 0 10px' }}
        >
          25% 효율 향상
        </span>
        <p className="small_title">
          40개 테이블 갈빗집 A,
          <br /> 더 오더 도입 후 7명 이하던 업무를 5명으로
        </p>
      </div>
    </div>
  )
}

export default MobBanner02
