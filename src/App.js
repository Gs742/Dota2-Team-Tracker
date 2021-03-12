import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import MyTeam from './components/MyTeam'
import Navigation from './components/Navigation'
import Players from './components/Players'
import ShowTeam from './components/ShowTeam'
import Teams from './components/Teams'


function App() {
  const [allPlayers, setAllPlayers] = useState(null)

  useEffect(()=>{
    const getData = async () => {
      const response = await axios.get('https://api.opendota.com/api/proPlayers')
      setAllPlayers(response.data)
    }
    getData()
  },[])
  if (!allPlayers){
    return null
  }
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/players">
          <Players/>
        </Route>
        <Route exact path ="/teams">
          <Teams/>
        </Route>
        <Route path="/teams/:team_id">
          <ShowTeam {...allPlayers} />
        </Route>
        <Route exact path ="/myteam">
          <MyTeam/>
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}

export default App
