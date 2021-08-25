import { useEffect, useState} from "react";


const SimpleInput = (props) => {
const [enteredName, setEntredName] =  useState('');
const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
const [enteredNameTouched, setEnteredNameTouched]= useState(false); 
const [formIsValid, setFormIsValid] = useState(false);



useEffect(()=>{
  if(enteredNameIsValid){
    setFormIsValid(true)
  }else{
    setFormIsValid(false)
  }
},[enteredNameTouched, enteredNameIsValid])







const nameInputChangeHandler =(e)=>{
  setEntredName(e.target.value);
  if(enteredName.trim() !== ''){
    setEnteredNameIsValid(true)
    return;
  } 
}


const nameInputBlurHandler =()=>{
  setEnteredNameTouched(true);
  if(enteredName.trim() === ''){
    setEnteredNameIsValid(false)
    return;
  } 
}



const formSubmissionHandler =(e)=>{
  e.preventDefault();
setEnteredNameTouched(true)

  if(enteredName.trim() === ''){
    setEnteredNameIsValid(false)
    return;
  } 
  setEnteredNameIsValid(true);
  console.log(enteredName)
}

const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

const nameInputClasses =  nameInputIsValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
