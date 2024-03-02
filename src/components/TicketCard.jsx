import { Link } from 'react-router-dom'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = () => {
  return (
    <div className="ticket-card">

      <Link>
        <div className='ticket-color'></div>
        <h2>Title</h2>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
        <DeleteBlock />
      </Link>
      <DeleteBlock />
    </div>
  )
}

export default TicketCard