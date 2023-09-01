import React, { useState, useEffect } from 'react'
// import logo from '../assets/images/logo.png'
import logo from '../assets/images/new_logo.png'
import '../assets/css/main.css'
import Popup from './Popup.tsx'
import { Link } from 'react-router-dom'

function Header() {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 767)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [showPopup, setShowPopup] = useState(false)

  const handleRequestClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <div id="Header">
      <div className="Header_Wrap">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="Header_contents">
          <span>상담 전화 : 1533-3416</span>
          <div
            className="RequestBtn Mob_RequestBtn"
            onClick={handleRequestClick}
          >
            {/* <Link to="/popup">
              <button>
                <span>상담 문의</span>
              </button>
            </Link> */}
            <button>
              <span>상담 문의</span>
            </button>
          </div>
        </div>
      </div>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  )
}

export default Header
