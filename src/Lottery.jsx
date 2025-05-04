// import React from "react";
import {useState} from "react";
import "./lottery.css";
import { genTicket } from "./helper";

const Lottery=()=>{

    //ticket
    const [ticket,setTicket]= useState(genTicket(3));


    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
          button

        </div>
    );
}
export default Lottery;