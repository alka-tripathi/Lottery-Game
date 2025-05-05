import TicketNum from "./TicketNum";
import "./ticket.css";

const Ticket=({ticket})=>{
return (
    <div className="ticket">
        <p>Ticket</p>
     {ticket.map((num,idx)=>(
        <TicketNum num={num} key={idx}> </TicketNum>
     ))}
    </div>
)
}   

export default Ticket;