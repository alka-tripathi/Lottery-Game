import "./ticketNum.css";
const TicketNum=({num,idx})=>{
    return <span className="ticketNum" key={idx}>{num}</span>
}

export default TicketNum;