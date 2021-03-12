import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  return (
    <nav className='nav box primary'>
      <div className='container'>
        <div className="columns is-multiline">       
          <div className='column is-one-quarter-desktop' >
            <Link to='/'>
              <span className="title">
            Home
              </span>
            </Link>
          </div>
          <div className='column is-one-quarter-desktop'>
            <Link to='/teams'>
              <span className="title">
            Teams
              </span>
            </Link>
          </div>
          <div className='column is-one-quarter-desktop'>
            <Link to='/players'>
              <span className="title">
            Players
              </span>
            </Link>
          </div>
          <div className='column is-one-quarter-desktop'>
            <Link to='/myteam'>
              <span className="title">
            My Team
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
