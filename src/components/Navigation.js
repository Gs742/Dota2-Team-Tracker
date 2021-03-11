import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  return (
    <nav className='nav'>
      <div>
        <Link to='/'>
          <span>
            Home
          </span>
        </Link>
      </div>
      <div>
        <Link to='/teams'>
          <span>
            Teams
          </span>
        </Link>
      </div>
      <div>
        <Link to='/players'>
          <span>
            Players
          </span>
        </Link>
      </div>
      <div>
        <Link to='/myteam'>
          <span>
            My Team
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
