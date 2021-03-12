/*eslint-disable camelcase */
import React from 'react'

//import { Link } from 'react-router-dom'
const PlayerTile = ({ team_name,team_id, name, personaname, avatarfull, profileurl, steamid, fantasy_role }) => {
//team_id and fantasy_role need changing team_name
  return (
    
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">Name: {name}</div>
          <div className="card-header-title">Alt Name: {personaname}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={avatarfull} alt={`${name} Avatar`} />
          </figure>
        </div>
        <div className="card-content">
          <h5>Team position:{fantasy_role}</h5>
          <h5>Steam ID:{steamid}</h5>
          <a href={profileurl}>Steam Profile</a>
        </div>
        <div className="card-footer">
          <h6>Team Name: {team_name}</h6>
          <h6>Team ID: {team_id}</h6>
            
        </div>
      </div>
    </div>
    
  )
}

export default PlayerTile