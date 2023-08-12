import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header_posts">
        <span>MERN</span>
        <NavLink to='/create' className='nav_link'>Create Post</NavLink>
        <NavLink className='nav_link' to='/allpost'>Login page</NavLink>
        <NavLink className='nav_link' to='/readpost'>Read Post</NavLink>
      </div>
    </header>
  )
}

export default Header
