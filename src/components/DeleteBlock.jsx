
const DeleteBlock = () => {
  const deleteTicket = () => {
    console.log('deleted')

  }
  return (
    <div className="delet-block">
      <div className="delet-icon" onClick={deleteTicket} >❌</div>
    </div>
  )
}

export default DeleteBlock