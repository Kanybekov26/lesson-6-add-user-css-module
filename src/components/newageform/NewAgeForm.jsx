
import styles from "../newageform/NewAgeForm.module.css"
import React from 'react'
import Inputform from '../inputform/Inputform'

const NewAgeForm = ({newyearuser}) => {
    // console.log(newyearuser);
  return (
    <div className={styles.newageForm}>
        <Inputform
        newyearuser={newyearuser}
        />
    </div>
  )
}

export default NewAgeForm