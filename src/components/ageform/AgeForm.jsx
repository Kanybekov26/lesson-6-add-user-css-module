
import '../ageform/AgeForm.css'
import React from 'react'
import AgeItem from '../ageitem/AgeItem'
const AgeForm = ({yearuser}) => {
    // console.log(yearuser);
    
  return (
    <div className='ageForm-container'>
     {yearuser.map((element) => {
        // console.log(element);
        return (
            <AgeItem
            yearuser = {element}
            />
        )
     })}
    </div>
  )
}

export default AgeForm