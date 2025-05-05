import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'
import './lottery.css';

import TicketNum from './TicketNum'
import Ticket from './Ticket'
function App() {
  // const [ticket,newTicket] = useState([0,0,0]);

  return (
    <>
      <div>
        {/* <Ticket ticket={[0,1,2]}></Ticket> */}
        <Lottery n={3} winningSum={15}></Lottery>
    {/* <TicketNum num={5}></TicketNum>
    <TicketNum num={6}></TicketNum>
    <TicketNum num={7}></TicketNum> */}
      </div>
  
    </>
  )
}

export default App
