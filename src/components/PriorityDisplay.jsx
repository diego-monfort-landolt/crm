
const PriorityDisplay = ({ priority }) => {
  return (
    <div className="priority-display">
      <div className="star-container">
        <h3 style={{color: priority >=1 ? 'rgb(255, 0, 0)' : ''}}>★</h3>
        <h3 style={{color: priority >=2 ? 'rgb(160,32,240)' : ''}}>★</h3>
        <h3 style={{color: priority >=3 ? 'rgb(255, 95, 21)' : ''}}>★</h3>
        <h3 style={{color: priority >=4 ? 'rgb(0,255,0)' : ''}}>★</h3>
        <h3 style={{color: priority >=5 ? 'rgb(0,255,0)' : ''}}>★</h3>
      </div>
    </div>
  )
}

export default PriorityDisplay