import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowTeam = (props) => {
  const params = useParams()
  const [theTeam, setTheTeam] = useState([])
  const [thePlayers, setThePlayers] = useState([])
  const [allThePlayers, setAllThePlayers] = useState(null)

  useEffect(()=>{
    const getData = async () => {
      const response = await axios.get(`https://api.opendota.com/api/teams/${params.team_id}`)
      setTheTeam(response.data)
      
    }
    getData()
    if (!props){
      return
    }
  },[])

  useEffect(() => {
    if (!props) return 
    setAllThePlayers(props)

  }, [props])

  useEffect(() => {
    if (!allThePlayers){
      return
    }
    const array = Object.values(allThePlayers)
    const newArray = array.filter(player => {
      return player.team_id === Number(params.team_id)
    })
    console.log('NEW array',newArray)
    setThePlayers(newArray)
    
  },[allThePlayers])

  
  const { team_id, tag, logo_url, wins, losses, rating } = theTeam
  const totalGames = wins + losses
  
  return (
    <section className="section background">
      {console.log(thePlayers)}
      <div className="container">
        <div className="container">
          <section className="column box primary">
            <figure className="image is-centered">
              <img className='is-rounded teamIMG' src={ logo_url } alt="Team logo" />
            </figure>
            <hr className='primary' />
            <h2 className="title has-text-centered">Team Name: {theTeam.name}</h2>
            <h2 className="title has-text-centered">Team Tag: {tag}</h2>
            <h2 className="title has-text-centered">Team ID: {team_id}</h2>
            <h2 className="title has-text-centered">Team Rating: {rating}</h2>
            <hr className='primary'/>
            <h3 className="subtitle has-text-centered">Wins: {wins}</h3>
            <h3 className="subtitle has-text-centered">Losses: {losses}</h3>
            <h3 className="subtitle has-text-centered">Total Matches: {totalGames}</h3>
          </section>
          <div className="container">
            <div className="columns is-multiline box primary">
              { thePlayers && thePlayers.map(player =>(
                <div className="column is-one-third-desktop is-one-third-tablet primary cardMargin box" key={player.id}>
                  <h4 className="title is-4">Name:{player.name}</h4>
                  <p>Alt Name:{ player.personaname }</p>
                  <img src={player.avatarfull}></img>
                  <hr className='secondary' />
                  <h4 className="title is-4">Role: {player.fantasy_role}</h4>
                  <hr className='secondary'/>
                  <p>{ }</p>
                  <hr className='secondary'/>
                  <h4 className="title is-4"><a href={player.profileurl}>Steam Profile</a></h4>
                  <h4 className="title is-4">Steam ID: {player.steamid}</h4>
                  <hr className='secondary'/>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowTeam
