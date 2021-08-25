import React, {useState} from "react";


const BasicForm = (props) => {
const [enteredName, setEnteredName]=useState('');
const [enteredLastName, setLastEnteredName]=useState('');
const [enteredNameIsValid, setEnteredNameIsValid]= useState(false);
const [enteredLastNameIsValid, setLastEnteredNameIsValid]= useState(false);
const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)


// THIS IS FOR FIRST NAME
const inputNameChangeHandler =(e)=>{
  setEnteredName(e.target.value)
  if(enteredName.trim() === '' ){
    setEnteredNameIsValid(false);
  setEnteredNameIsTouched(false);
  setLastEnteredNameIsValid(false)
  }else{
    return;
  }
  
}

// THIS IS FOR LAST NAME
const lastNameChangeHandler =(e)=>{
  setLastEnteredName(e.target.value);
  if(enteredLastName.trim() === '') {
    setLastEnteredNameIsValid(false);
    setEnteredNameIsTouched(false);
    setEnteredNameIsValid(false);
  }else{
    return;
  }
  
}

// ONBLUR FIRST NAME HANDLER
const onBlurNameInputHandler =()=>{
  if(enteredName.trim() === ''){
    setEnteredNameIsValid(true);
    setEnteredNameIsTouched(true);
    setLastEnteredNameIsValid(true)
  }
}


// TOTAL FORM VALIDITY
const formIsValidHandler =(e)=>{
  e.preventDefault();
  if(enteredName.trim() === '' || enteredLastName.trim() === ''){
    setEnteredNameIsValid(true);
    setEnteredNameIsTouched(true);
    setLastEnteredNameIsValid(true);
  }else{
    setLastEnteredNameIsValid(false);
    setEnteredNameIsValid(false)
    setEnteredNameIsTouched(false)
  }
}

const nameInputClasses =  enteredNameIsTouched  ? 'form-control invalid' : 'form-control';
return (
  <form onSubmit={formIsValidHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={inputNameChangeHandler} onBlur={onBlurNameInputHandler}  />
          {enteredNameIsValid &&<p className ='error-text'>Please Enter Your First Name</p>}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor='name' >Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={onBlurNameInputHandler}/>
          {enteredLastNameIsValid &&<p className ='error-text'>Please Enter Your Last Name</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
