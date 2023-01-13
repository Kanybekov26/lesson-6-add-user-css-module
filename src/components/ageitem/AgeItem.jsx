

import React from 'react'
import "../ageitem/AgeItem.css"


const AgeItem = ({yearuser}) => {
  return (
    <ul className='ul'>
        <li className='list-item'>
        <p className='p'>{yearuser.name} <span>({yearuser.age} years old)</span></p>
        </li>
    </ul>
  )
}

export default AgeItem