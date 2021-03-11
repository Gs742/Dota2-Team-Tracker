import React from 'react'
//import { Link } from 'react-router-dom'
const TeamTile = ({ teamId, name, tag, logoUrl, wins, losses, rating }) => {
//team_id and logo_url
  const totalGames = wins + losses
  return (
    
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
          <div className="card-header-title">{tag}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={logoUrl} alt={`${name} Logo`} />
          </figure>
        </div>
        <div className="card-content">
          <h5>Rating: {rating}</h5>
          <h5>Total Matches: {totalGames}</h5>
          <h5>Wins: {wins}</h5>
          <h5>Losses: {losses}</h5>
        </div>
        <div className="card-footer">
          <h6>Team ID: {teamId}</h6>
            
        </div>
      </div>
    </div>
    
  )
}

export default TeamTile
