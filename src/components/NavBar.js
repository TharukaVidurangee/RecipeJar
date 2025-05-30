import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className="brand">
                <h1>RecipeJar</h1>
            </Link>
            <Link to="/create">
                Create a new recipe
            </Link>
        </nav>
    </div>
  )
}
