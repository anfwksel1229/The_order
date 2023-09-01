import React from 'react'
import MobFoodImage01 from '../../assets/images/Shootiong/MobFood01.png'
import MobFoodImage02 from '../../assets/images/Shootiong/MobFood02.png'
import MobFoodImage03 from '../../assets/images/Shootiong/MobFood03.png'

function Shooting01() {
  return (
    <div className="Shootiong_image">
      <picture class="img1">
        <img src={MobFoodImage01} alt="" />
      </picture>
      <picture class="img2">
        <img src={MobFoodImage02} alt="" />
      </picture>
      <picture class="img3">
        <img src={MobFoodImage03} alt="" />
      </picture>
    </div>
  )
}

export default Shooting01
