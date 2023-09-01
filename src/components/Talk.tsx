import React, { useEffect } from 'react'

function Talk() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://partner.talk.naver.com/banners/script'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트 제거
      document.body.removeChild(script)
    }
  }, [])

  const talkBannerStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    zIndex: 99,
  }

  return (
    <div style={talkBannerStyle} class="talk_banner_div" data-id="135036"></div>
  )
}

export default Talk
