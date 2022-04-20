import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ({changeId} ) => {
  return (
    <div className='nav__wrapper'>
        <ul className='header__nav'>
        <Link className='home' to="/" >
          <li onClick={()=>changeId({}) }>Home</li>
        </Link>
        </ul>
    </div>
  )
}

export default Navigation