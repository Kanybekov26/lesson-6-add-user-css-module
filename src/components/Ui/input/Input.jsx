
import "../input/Imput.css"
import React from 'react'

const Input = ({id,labelName,placeholder,type,...rest}) => {
    // console.log(rest);
  return (
    <div className="imput-container">
        <label className="label" htmlFor={id}>{labelName}</label>
        <input className="input" type={type} placeholder={placeholder || " "} id={id} {...rest}/>
    </div>
  )
}

export default Input