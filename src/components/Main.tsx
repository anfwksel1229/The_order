import React, { useState, useEffect } from 'react'
import '../assets/css/main.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import Banner01 from './Swiper/Banner01.tsx'
import Banner02 from './Swiper/Banner02.tsx'
import Banner03 from './Swiper/Banner03.tsx'
import Banner04 from './Swiper/Banner04.tsx'
// import Request from '../assets/images/icon/Request.png'
// import Popup from './Popup.tsx'
import MobBanner01 from './Swiper/MobBanner01.tsx'
import MobBanner02 from './Swiper/MobBanner02.tsx'
import MobBanner03 from './Swiper/MobBanner03.tsx'
import MobBanner04 from './Swiper/MobBanner04.tsx'

function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)
  // const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const handleRequestClick = () => {
  //   setShowPopup(true)
  // }

  // const handleClosePopup = () => {
  //   setShowPopup(false)
  // }

  const renderBanner = () => {
    if (isMobile) {
      return (
        <>
          <SwiperSlide>
            <MobBanner01 />
          </SwiperSlide>
          <SwiperSlide>
            <MobBanner02 />
          </SwiperSlide>
          <SwiperSlide>
            <MobBanner03 />
          </SwiperSlide>
          <SwiperSlide>
            <MobBanner04 />
          </SwiperSlide>
        </>
      )
    } else {
      return (
        <>
          <SwiperSlide>
            <Banner01 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner02 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner03 />
          </SwiperSlide>
          <SwiperSlide>
            <Banner04 />
          </SwiperSlide>
        </>
      )
    }
  }

  return (
    <div className="Main_bg">
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="Main_Swiper"
      >
        {renderBanner()}
      </Swiper>

      {/* {!isMobile && (
        <div id="Request" onClick={handleRequestClick}>
          <img src={Request} alt="" />
          <div className="Request_wrap">
            <span>상담문의</span>
          </div>
        </div>
      )} */}

      {/* {showPopup && !isMobile && <Popup onClose={handleClosePopup} />} */}
    </div>
  )
}

export default Main
