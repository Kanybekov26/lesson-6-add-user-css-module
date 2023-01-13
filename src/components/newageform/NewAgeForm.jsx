
import "../newageform/NewAgeForm.css"
import React from 'react'
import Inputform from '../inputform/Inputform'

const NewAgeForm = ({newyearuser}) => {
    // console.log(newyearuser);
  return (
    <div className='newageForm'>
        <Inputform
        newyearuser={newyearuser}
        />
    </div>
  )
}

export default NewAgeForm