// import React from "react";
import {useState} from "react";
import "./lottery.css";
import { genTicket,sum } from "./helper";


const Lottery=()=>{

    //ticket
    const [ticket,setTicket]= useState(genTicket(3));


    let isWinning=sum(ticket)===15;

    const newTicket=()=>{
        setTicket(genTicket(3));
    }


    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={newTicket}>Buy New Ticket</button>
            <h3> {isWinning && "congralutaion you won" }</h3>

      

        </div>
    );
}
export default Lottery;