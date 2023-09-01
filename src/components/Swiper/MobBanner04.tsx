import React from 'react'
import Mob_Banner04 from '../../assets/images/banner/Mob_Banner04.png'
import '../../assets/css/main.css'

function MobBanner04() {
  return (
    <div className="Mob_Banner_container">
      <img className="banner_image04" src={Mob_Banner04} alt="" />
      <div className="Text_Wrap">
        <span
          className="big_title"
          style={{ display: 'block', margin: ' 30px 0 10px' }}
        >
          130% 회전율 상승
        </span>
        <p className="small_title">
          20개 테이블을 운영하는 C 치킨집은 <br />더 오더 도입 후 테이블 회전율
          130% 향상
        </p>
      </div>
    </div>
  )
}

export default MobBanner04
