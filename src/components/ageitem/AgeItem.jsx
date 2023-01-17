

import React from 'react'
import styles from "../ageitem/AgeItem.module.css"


const AgeItem = ({yearuser}) => {
  return (
    <ul className={styles.ul}>
        <li>
        <p className={styles.p}>{yearuser.name} <span>({yearuser.age} years old)</span></p>
        </li>
    </ul>
  )
}

export default AgeItem