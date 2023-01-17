

import React from 'react'
import { useState } from 'react'
import Button from '../Ui/button/Button'
import {Input} from "../Ui/input/Input"
import "../inputform/ImputForm.css"


const Inputform = ({newyearuser}) => {

const [name,setName] = useState("")

const [age,setAge] = useState("")

const inputChangeHandler = (event) => {
    setName(event.target.value)
}

const inputNamberChangeHandler = (event) => {
  setAge(event.target.value)
}

const addUserButtonhandler = () => {
 const newageuser = {
        name,
        age,
    }
    newyearuser(newageuser)
    setAge('')
    setName('')
}

  return (
    <div>
        <Input
        id={'nname'}
        labelName={"Username"}
        type={"text"}
        placeholder={""}
        value={name}
        onChange={inputChangeHandler}
        />
        <Input
         id={'age'}
         labelName={"Age(Years)"}
         type={"number"}
         placeholder={""}
         value={age}
         onChange={inputNamberChangeHandler}
        />
        <Button onClick={addUserButtonhandler} disabled={!name && !age}>Add User</Button>

    </div>
  )
}

export default Inputform