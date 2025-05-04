import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'
import './lottery.css';

function App() {
  // const [ticket,newTicket] = useState([0,0,0]);

  return (
    <>
      <div>
       <Lottery></Lottery>
      </div>
  
    </>
  )
}

export default App
