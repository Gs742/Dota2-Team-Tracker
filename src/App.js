import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MyTeam from './components/MyTeam'
import Navigation from './components/Navigation'
import Players from './components/Players'
import Teams from './components/Teams'


function App() {
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
        <Route exact path ="/myteam">
          <MyTeam/>
        </Route>
      </Switch>
    </BrowserRouter>
  
  )
}

export default App
