import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerTile from '../components/PlayerTile'
const Players = () => {

  const [players, setPlayers] = useState([])
  
  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get('https://api.opendota.com/api/proPlayers')
      setPlayers(response.data)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          {players.map( player => (
            <PlayerTile key={player.account_id} {...player} />
          ))}
        </div>
      </div>
      TEAMS
    </div>
  )
}

export default Players
