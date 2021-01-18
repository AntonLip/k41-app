import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs";
import Item from '../Item'

export const validate = values => {
  
  const errors = {}
  errors.Activ = false;

  if (!values.name) {
    errors.name = 'Required'
    errors.Activ = true;
  } else if (!values.fullName) {
    errors.Activ = true;
    errors.fullName = 'Required'
  }  
  if (!values.countHours) {
    errors.Activ = true;
    errors.countHours = 'Required'
  } else if (isNaN(Number(values.countHours))) {
    errors.Activ = true;
    errors.countHours = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursGZ))) {
    errors.Activ = true;
    errors.countHoursGZ = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursPZ))) {
    errors.Activ = true;
    errors.countHoursPZ = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursLeck))) {
    errors.Activ = true;
    errors.countHoursLeck = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursSEM))) {
    errors.Activ = true;
    errors.countHoursSEM = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursLR))) {
    errors.Activ = true;
    errors.countHoursLR = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursMZ))) {
    errors.Activ = true;
    errors.countHoursMZ = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursTest))) {
    errors.Activ = true;
    errors.countHoursTest = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursСontrolWork))) {
    errors.Activ = true;
    errors.countHoursСontrolWork = 'Must be a number'
  } 
  if (isNaN(Number(values.countHoursSWZ))) {
    errors.Activ = true;
    errors.countHoursSWZ = 'Must be a number'
  } 
  if (Number(values.countHours) != Number(values.countHoursGZ) +  Number(values.countHoursPZ) + 
  Number(values.countHoursLeck) +  Number(values.countHoursLR) + 
  Number(values.countHoursSEM) +  Number(values.countHoursMZ) + 
  Number(values.countHoursСontrolWork) + Number(values.countHoursSWZ) + Number(values.countHoursTest)) {
    errors.Activ = true;
    errors.countHours = 'Часы не совпадают!!'

}  
  return errors
}

export const warn = values => {
  const warnings = {}
  
    if (values.countHours != values.countHoursGZ +  values.countHoursPZ + 
                              values.countHoursLeck +  values.countHoursLR + 
                              values.countHoursSEM +  values.countHoursMZ + 
                              values.countHoursTest +  values.countHoursСontrolWork + 
                              values.countHoursSWZ) {
      warnings.countHours = 'Часы не совпадают!!'
    }
  
  
  return warnings
}

export const Input = (props) => {
    const renderChildren = () => {
        return React.Children.map(props.children, child => {
          return React.cloneElement(child, {
            parentProps: {...props}
          })
        })
      }
    return (
        <Item img={<BsFillCaretDownFill/>} imgActive={<BsFillCaretUpFill/>} title={props.title}>
            <form class="chat-input chat__input" onSubmit={props.handleSubmit}>
                {props.children}
                <button type="submit" class="chat-input__submit btn">{props.btnText}</button>
            </form>
        </Item> 
    )
}


