
import React from 'react'
import "../button/Button.css"

const Button = ({children,...rest}) => {
  return (
    <div className='button'>
        <button className='btn' {...rest}>{children}</button>
    </div>
  )
}

export default Button 
