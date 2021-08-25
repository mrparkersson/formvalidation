import { useEffect, useState} from "react";


// const SimpleInput = (props) => {
// const [enteredName, setEntredName] =  useState('');
// const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
// const [enteredNameTouched, setEnteredNameTouched]= useState(false); 
// const [formIsValid, setFormIsValid] = useState(false);
// const [enteredEmail, setEnteredEmail]= useState('');
// const [enteredEmailTouched, setEnteredEmailTouched]= useState(false)

// const enteredEmailIsValid = enteredEmail.includes('@');
// const enteredEmailIsInvalid = !enteredEmailIsValid && enteredNameTouched;



// useEffect(()=>{
//   if(enteredNameIsValid){
//     setFormIsValid(true)
//   }else{
//     setFormIsValid(false)
//   }
// },[enteredNameTouched, enteredNameIsValid])

// const emailInputChangeHandler =(e)=>{
//   setEnteredEmail(e.target.value)
// };

// const emailInputBlurHandler = (e)=>{
// setEnteredEmailTouched(true);
// if(enteredEmail.trim() === ''){
//   setEnteredEmailTouched(true)
//   return;
// } 
// }


// const nameInputChangeHandler =(e)=>{
//   setEntredName(e.target.value);
//   if(enteredName.trim() !== ''){
//     setEnteredNameIsValid(true)
//     return;
//   } 
// }


// const nameInputBlurHandler =()=>{
//   setEnteredNameTouched(true);
//   if(enteredName.trim() === ''){
//     setEnteredNameIsValid(false)
//     return;
//   } 
// }



// const formSubmissionHandler =(e)=>{
//   e.preventDefault();
// setEnteredNameTouched(true)

//   if(enteredName.trim() === '' && enteredEmailIsValid){
//     setEnteredNameIsValid(false)
//     return;
//   } 

// console.log(enteredName);
// console.log(enteredEmail);
//   setEnteredNameIsValid(true);
//   setEnteredEmail('');
//   setEntredName('');
//   setEnteredEmailTouched(false)
// }

// const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
// const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'

// const nameInputClasses =  nameInputIsValid ? 'form-control invalid' : 'form-control'
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses} >
//         <label htmlFor='name'>Your Name</label>
//         <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
//         {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
//       </div>
//       <div className={emailInputClasses} >
//         <label htmlFor='email'>Your E-Mail</label>
//         <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
//         {enteredEmailIsValid && <p className='error-text'>Please Enter a valid Email</p>}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
