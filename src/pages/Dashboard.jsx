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
      priority: 1,
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
      status: 'stuck',
      priority: 3,
      progress: 10,
      description: 'The button dont works...',
      timeestamp: '2023-12-22 T09:38:17+0000'
    },
    {
      category: 'Q3 2023',
      color: 'green',
      title: 'build a bot',
      owner: 'DiegoDev',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown',
      status: 'new',
      priority: '5',
      progress: 2,
      description: 'work on it',
      timeestamp: '2024-01-10 T09:38:17+0000'
    }
  ]
  const colors = [
    'rgb(255,179,186)',
    'rgb(255,233,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)'
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category ))
  ]
  console.log(uniqueCategories)
  return (
    <>
      <div className="dashboard-container">
        <h1>My Projects</h1>
        <div className="ticket-container">
          {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory )
              .map((filteredTicket, _index) =>
                <TicketCard 
                key={_index}
                id={_index}
                color={colors[categoryIndex] || colors[0] }
                ticket={filteredTicket}
                /> 
                )}
            </div>
          ))}
        </div>      
      </div>
    </>
  )
}
export default Dashboard