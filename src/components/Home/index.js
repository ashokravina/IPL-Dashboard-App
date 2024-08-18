// Write your code here

import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isTeamData: [], isLoader: true}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const upDatedTeamData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      imageUrl: eachTeam.team_image_url,
    }))
    
    this.setState({
      isTeamData: upDatedTeamData,
      isLoader: false,
    })
  }

  renderTeamCardDetails = () => {
    const {isTeamData} = this.state
    return (
      <ul className="teamcard-container">
        {isTeamData.map(eachTeam => (
          <TeamCard teamData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <Loader type="Rings" color="#ffffff" height={80} width={80} />
  )

  render() {
    const {isLoader} = this.state
    return (
      <div className="home-container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="teamcard-container">
          {isLoader ? this.renderLoading() : this.renderTeamCardDetails()}
        </div>
      </div>
    )
  }
}
export default Home
