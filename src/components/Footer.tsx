import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/images/Footer_Logo.png'
import '../assets/css/Footer.css'

function Footer() {
  return (
    <footer id="Footer_wrap">
      <div className="Footer_Logo">
        <img src={FooterLogo} alt="" />
      </div>
      <div className="Footer_wrapper">
        <div className="Footer_BlockFlex">
          <span>㈜더오더</span>
          <ul>
            <li>
              <Link to="/policy" className="text-decoration">
                서비스 이용약관
              </Link>
              ｜
            </li>
            <li>
              <Link to="/purpose" className="text-decoration">
                개인정보 취급방침
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer_BlockFlex">
          <ul>
            <li>대표자명 : 류재관 대표</li>
            <li>사업자등록번호 : 170-81-03192</li>
            <li>주소 : 경기도 남양주시 별내중앙로 26 10F</li>
            <li>대표전화 : 1533-3416</li>
            <li>팩스번호 : 031-869-2458</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
