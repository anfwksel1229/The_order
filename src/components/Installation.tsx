import React from 'react'
import '../assets/css/Installation.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Install_Image01 from '../assets/images/install/Install_Image01.jpeg'
import Install_Image02 from '../assets/images/install/Install_Image02.jpeg'
import Install_Image03 from '../assets/images/install/Install_Image03.jpeg'
import Install_Image04 from '../assets/images/install/Install_Image04.jpeg'

function InfiniteBanner() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id="Installation">
      <p>THE order</p>
      <h2 className="title">더오더로 간편한 설치</h2>
      <p>
        더오더를 이용하시는 파트너를 위해
        <br /> 최고의 서비스를 제공하겠습니다.
      </p>
      <Slider {...settings} className="custom-slider">
        <div>
          <img src={Install_Image01} alt="" />
        </div>
        <div>
          <img src={Install_Image02} alt="" />
        </div>
        <div>
          <img src={Install_Image03} alt="" />
        </div>
        <div>
          <img src={Install_Image04} alt="" />
        </div>
        <div>
          <img src={Install_Image01} alt="" />
        </div>
        <div>
          <img src={Install_Image02} alt="" />
        </div>
        <div>
          <img src={Install_Image03} alt="" />
        </div>
        <div>
          <img src={Install_Image04} alt="" />
        </div>
        <div>
          <img src={Install_Image01} alt="" />
        </div>
        <div>
          <img src={Install_Image02} alt="" />
        </div>
        <div>
          <img src={Install_Image03} alt="" />
        </div>
        <div>
          <img src={Install_Image04} alt="" />
        </div>
      </Slider>

      {/* <div class="title">
        <div>
          <img src={Install_Image01} alt="" />
          <img src={Install_Image02} alt="" />
          <img src={Install_Image03} alt="" />
          <img src={Install_Image04} alt="" />
        </div>
        <div>
          <img src={Install_Image01} alt="" />
          <img src={Install_Image02} alt="" />
          <img src={Install_Image03} alt="" />
          <img src={Install_Image04} alt="" />
        </div>
      </div> */}
    </div>
  )
}

export default InfiniteBanner
