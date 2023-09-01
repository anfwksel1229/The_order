import React from 'react'
import { Link } from 'react-router-dom'
import BlogBtn from '../assets/images/icon/Blog_btn.png' // Assuming the path is correct

function Floating() {
  const FloatingBtnStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '30px',
    zIndex: 9,
    backgroundImage: `url(${BlogBtn})`, // Use backgroundImage instead of background-url
    backgroundSize: 'contain',
    width: '80px',
    height: '80px',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  }

  const FloatingBtnStyleMobile = {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    zIndex: 999,
    backgroundImage: `url(${BlogBtn})`, // Use backgroundImage instead of background-url
    backgroundSize: 'contain',
    width: '60px',
    height: '60px',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  }

  return (
    <div id="Floating">
      <Link to="https://m.blog.naver.com/theorder01?proxyReferer=">
        <div
          style={
            window.innerWidth <= 768 ? FloatingBtnStyleMobile : FloatingBtnStyle
          }
          className="floating-button"
        ></div>
      </Link>
    </div>
  )
}

export default Floating
