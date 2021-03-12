import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TeamTile from './TeamTile'

const Teams = () => {

  const [teams, setTeams] = useState([])
  console.log(teams)

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://api.opendota.com/api/teams')
      setTeams(response.data)
    }
    getData()
  }, [])


  return (
    <div className="section background">
      <div className="container secondary">
        <div className="columns primary box is-multiline">
          { teams.map( team => (
            <TeamTile key={team.team_id} {...team} />
          ))}
        </div>
      </div>
      TEAMS
    </div>
  )
}

export default Teams
