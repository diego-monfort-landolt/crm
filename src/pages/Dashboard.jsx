import TicketCard from '../components/TicketCard'
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <h1>My Projects</h1>
        <div className="ticket-container">
          <TicketCard />
        </div>
        <button className="btn-standart">Hello</button>
      </div>
    </>
  )
}

export default Dashboard