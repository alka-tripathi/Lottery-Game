// import React from "react";
import {useState} from "react";
import "./lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import TicketNum from "./TicketNum";


const Lottery=({n,winningSum})=>{

    //ticket
    const [ticket,setTicket]= useState(genTicket(n));


    let isWinning=sum(ticket)===winningSum;

    const newTicket=()=>{
        setTicket(genTicket(n));
    }


    return (
        <div>
            <h1>Lottery Game</h1>
           <Ticket ticket={ticket}></Ticket>
            <button onClick={newTicket}>Buy New Ticket</button>
            <h3> {isWinning && "Congragulation you won" }</h3>

      

        </div>
    );
}
export default Lottery;