import React from 'react'
import '../assets/css/Policy.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

function Policy() {
  return (
    <div>
      <Header />
      <div id="Policy">
        <p>::: 개인정보취급방침 ::::</p>
        <p className="margin-bottom">
          (주)더오더(이하 '회사'라 합니다.)는 회원의 사생활 및 개인정보를
          적극적으로 보호하여 정보화 사회에서의 통신의 자유를 보장하고자 아래와
          같이 개인정보취급방침을 명시하여 실천하고 있습니다.
        </p>
        <p className="margin-bottom">
          회사의 개인정보취급방침은 관련 법률 및 정부 지침의 변경과 회사의 내부
          정책 변화에 따라 변경될 수 있으며, 수시로 방문하셔서 그 내용을
          확인하여 주시기 바랍니다.
        </p>
        <p className="Policy_title">1. 개인정보의 수집 방법 및 범위</p>
        <p className="margin-bottom">
          회사는 서비스의 이용을 위하여 회원 가입 시에 회원 정보를 기입하도록
          합니다. 회원가입 시에 받는 기본 필수 정보에는 성명, 사업자등록번호,
          주소, 핸드폰번호, 전자우편 주소, 연락처가 있습니다. 이외에 보다 나은
          서비스를 위해 선택 정보인 GPS, 목소리, 모바일 토큰 등을 수집할 수
          있습니다.
        </p>
        <p className="margin-bottom">
          기타 서비스 이용과정 및 처리과정에서 생성되는 서비스 이용기록, 접속
          로그, 쿠키, 접속 IP정보, 결재기록 등이 수집될 수 있으며, 추가적인
          정보가 필요한 특정 서비스의 이용 시 추가 정보의 제공을 요청할 수
          있습니다. 이 경우에도 기입하신 정보는 해당 서비스의 이용 및 사전에
          밝힌 목적 이외에는 이용하지 않습니다.
        </p>
        <p className="Policy_title">2. 개인정보의 수집 목적 및 이용</p>
        <p className="margin-bottom">
          회사가 개인정보를 수집하는 목적은 양질의 서비스 제공 및 회원 개개인의
          기호와 필요에 따른 맞춤화된 서비스를 제공해드리기 위한 것입니다.
        </p>
        <p className="margin-bottom">
          회사는 서비스 제공에 따라 회원님의 동의 하에 광고성 정보를 전달할 수
          있으며, 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한 정보로서의
          가치가 있는 광고를 선별적으로 전달됩니다. 성별, 연령별 기타 특정
          조건의 집단에 대한 광고 게재 및 발송 시에도 회원의 개인정보는 광고를
          의뢰한 개인이나 단체에 제공되지 않습니다.
        </p>
      </div>
      <Footer />
    </div>
  )
}
export default Policy
