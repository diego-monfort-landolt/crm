import TicketCard from '../components/TicketCard'

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2023',
      color: 'red',
      title: 'Sales Button is not Working',
      owner: 'DiegoDev',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown',
      status: 'done',
      priority: 5,
      progress: 50,
      description: 'video how to use the buttons',
      timeestamp: '2023-12-01 T07:38:17+0000'
    },
    {
      category: 'Q2 2023',
      color: 'blue',
      title: 'Home Button is not Working',
      owner: 'Diego',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown',
      status: 'done',
      priority: 2,
      progress: 10,
      description: 'The button dont works...',
      timeestamp: '2023-12-22 T09:38:17+0000'
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