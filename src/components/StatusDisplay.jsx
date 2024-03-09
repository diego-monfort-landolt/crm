
const StatusDisplay = ( { status } ) => {

  const getColor = (status) => {
    let color 
    switch (status) {
      case 'done':
        color = 'rgb(0,255,0)'
        break
      case 'work on it':
        color = 'rgb(255,223,186'
        break
      case 'stuck':
        color = 'rgb(255,179,186)'
        break
      default:
        color = 'rgb(255, 0, 0)'
    }
    return color
  }

  return (
    <div className="status-display" style={{ backgroundColor: getColor(status)}}>
      {status}
    </div>
  )
}

export default StatusDisplay