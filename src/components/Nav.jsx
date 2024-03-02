import { useNavigate } from "react-router-dom"

const Nav = () => {

  const navigate = useNavigate()
  return (
    <>
      <nav>
        <div className="logo-container">
          <img className="logo-img" src={'https://cdn.pixabay.com/photo/2016/08/26/15/54/checklist-1622517_1280.png'} alt="Todoo block - checket list" />
        </div>
        <div className="controls-container">
          <div className="nav-icon" onClick={() => navigate('/ticket')}>🔙</div>
          <div className="nav-icon" onClick={() => navigate('/')}>❌</div>
        </div>
      </nav>
    </>
  )
}

export default Nav