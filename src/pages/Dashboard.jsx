import TicketCard from '../components/TicketCard'

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2023',
      color: 'red',
      title: 'Windows GreenShot is not Working',
      owner: 'DiegoDev',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown' 
    }
  ]
  return (
    <>
      <div className="dashboard-container">
        <h1>My Projects</h1>
        <div className="ticket-container">
          <TicketCard />
          <button className="btn-standart">Hello</button>
        </div>      
      </div>
    </>
  )
}
export default Dashboard