const blankAvatar = 'https://cdn.pixabay.com/photo/2013/07/12/13/22/smiley-146922_1280.png'

const AvatarDisplay = ({ ticket }) => {
  return (

    <div className="avatar-container">
    <div className="img-container">
      <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt="Photo of ticketowner - profile image" />
    </div>
    </div>
  )
}

export default AvatarDisplay