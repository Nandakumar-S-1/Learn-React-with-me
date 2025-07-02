import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandleWindoResize from './useEffect/handleWindowWidth'
import ReturnPurpose from './useEffect/returnPurpose'
import CountUseRef from './useRef/CountUseRef'
import Contact from './useContext/context/Contact'
import Profiles from './useContext/context/Profiles'
import Footer from './useContext/context/Footer'



function App() {
return(
  <>
    <Profiles/>
    <Footer/>
  </>
)
}

export default App
