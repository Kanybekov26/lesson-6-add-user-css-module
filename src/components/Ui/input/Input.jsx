
import styles from "../input/Imput.module.css"
import React from 'react'

export const Input = ({id,labelName,placeholder,type,...rest}) => {
    console.log(id);
  return (
    <div className={styles.imputcontainer}>
        <label className={styles.label} htmlFor={id}>{labelName}</label>
        <input className={styles.input} type={type} placeholder={placeholder || " "} id={id} {...rest}/>
    </div>
  )
}
