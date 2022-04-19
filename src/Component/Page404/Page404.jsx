import React from 'react'
import './Pagecss.css'
import Stars from './Stars'
import Lamp from './Lamp'
import Error from './Error'

export default function Page404() {
  return (
    <div className='body'>
      <Stars/>
      <Lamp/>
      <Error/>
    </div>
  )
}
