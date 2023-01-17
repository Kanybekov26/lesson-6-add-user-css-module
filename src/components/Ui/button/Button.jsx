
import React from 'react'
import styles from  "../button/Button.module.css"

const Button = ({children,...rest}) => {
  return (
    <div className={styles.button}>
        <button className={styles.btn} {...rest}>{children}</button>
    </div>
  )
}

export default Button 
