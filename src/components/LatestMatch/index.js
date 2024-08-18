// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    firstInnings,
    secondInnings,
    umpires,
    result,
    manOfTheMatch,
    competingTeamLogo,
  } = latestMatch
  return (
    <li className="latest-list">
      <div className="latest-container">
        <div className="main-card">
          <div className="home-ground-details">
            <h1 className="name">{competingTeam}</h1>
            <p className="year">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <hr  className="line" />

        <div className="match-summary">
          <p className="innings">First Innings</p>
          <p className="match-innings"> {firstInnings} </p>
          <p className="innings">Second Innings</p>
          <p className="match-innings">{secondInnings}</p>
          <p className="manofthematch-para">Man Of The Match</p>
          <p className="manofthematch">{manOfTheMatch}</p>
          <p className="innings">Umpires</p>
          <p className="match-innings">{umpires}</p>
        </div>
      </div>
    </li>
  )
}
export default LatestMatch
