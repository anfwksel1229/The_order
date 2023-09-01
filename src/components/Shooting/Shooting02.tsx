import React from 'react'
import FoodImage01 from '../../assets/images/Shootiong/Food01.png'
import FoodImage02 from '../../assets/images/Shootiong/Food02.png'
function Shooting02() {
  return (
    <div className="Shootiong_image">
      <picture class="img1">
        <img src={FoodImage01} alt="" />
      </picture>
      <picture class="img2">
        <img src={FoodImage02} alt="" />
      </picture>
    </div>
  )
}

export default Shooting02
