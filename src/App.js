// import logo from './logo.svg'
import './App.css'
import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import Order from './components/Order.tsx'
import Shooting from './components/Shooting.tsx'
import Force from './components/Force.tsx'
import Footer from './components/Footer.tsx'
// import Talk from './components/Talk.tsx'
import Floating from './components/Floating.tsx'
import Installation from './components/Installation.tsx'

function App() {
  return (
    <>
      <Header />
      <Floating />
      <Main />
      <Order />
      <Shooting />
      <Installation />
      <Force />
      <Footer />
    </>
  )
}

export default App
