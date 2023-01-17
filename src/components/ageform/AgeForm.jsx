
import styles from'../ageform/AgeForm.module.css'
import React from 'react'
import AgeItem from '../ageitem/AgeItem'
const AgeForm = ({yearuser}) => {
    console.log(yearuser);
    
  return (
    <div className={styles.ageFormcontainer}>
     {yearuser.map((element) => {
        // console.log(element);
        return (
            <AgeItem
            key={element.name}
            yearuser = {element}
            />
        )
     })}
    </div>
  )
}

export default AgeForm