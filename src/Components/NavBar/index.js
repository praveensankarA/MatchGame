import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="nav-website-logo"
      />

      <div className="nav-score-timer-container">
        <p className="score-text">
          Score: <span className="span-ele">{score}</span>
        </p>

        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="nav-timer-logo"
        />
        <p className="sec-text">{timer} sec</p>
      </div>
    </nav>
  )
}

export default NavBar
