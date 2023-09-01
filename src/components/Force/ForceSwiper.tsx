import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import SwiperContents01 from './Swiper/SwiperContents01.tsx'
import SwiperContents02 from './Swiper/SwiperContents02.tsx'
import SwiperContents03 from './Swiper/SwiperContents03.tsx'
import SwiperContents04 from './Swiper/SwiperContents04.tsx'

function ForceSwiper({ ForceActiveSlide }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(ForceActiveSlide)
    }
  }, [ForceActiveSlide])

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <SwiperContents01 />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContents02 />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContents03 />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContents04 />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-navigation">
        {/* 슬라이드 버튼 렌더링 */}
        <button
          className="swiper-button-prev"
          onClick={handlePrevSlide}
        ></button>
        <button
          className="swiper-button-next"
          onClick={handleNextSlide}
        ></button>
      </div>
    </>
  )
}

export default ForceSwiper
