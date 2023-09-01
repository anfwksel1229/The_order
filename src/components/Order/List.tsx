import React from 'react'
import '../../assets/css/Order.css'
import Patten from '../../assets/images/Systembanner/patten.png'

function List({ selectedItem, handleItemClick }) {
  const isMobile = window.innerWidth <= 767
  const dutchPayText = isMobile ? (
    <React.Fragment>직원호출</React.Fragment>
  ) : (
    '직원호출'
  )

  return (
    <div id="List_Wrap">
      <ul>
        <li
          className={`item ${selectedItem === 0 ? 'selected' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          장바구니
        </li>
        <img src={Patten} alt="" />
        <li
          className={`item ${selectedItem === 1 ? 'selected' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          주문내역
        </li>
        <img src={Patten} alt="" />
        <li
          className={`item ${selectedItem === 2 ? 'selected' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          {dutchPayText}
        </li>
        <img src={Patten} alt="" />
        <li
          className={`item ${selectedItem === 3 ? 'selected' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          수량선택
        </li>
        <img src={Patten} alt="" />
        <li
          className={`item ${selectedItem === 4 ? 'selected' : ''}`}
          onClick={() => handleItemClick(4)}
        >
          다크모드
        </li>
      </ul>
    </div>
  )
}

export default List
