import '../styles/login.css'

import { useError } from "../customHooks/customHooks"
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

export default function Forgot(){
  const [error,setError] = useError();
  const [userObj,setUserObj] = useState({});
  const inputElem = useRef({
      email : null,
      password : null,
      old : null
    });
  
  return (
    <>
    <div className="main-main-container">
      <div className='main-container'>
      <div className='forgot-container'>
        <div className='welcome-div'>
          <h2>Change password</h2>
          <p>Enter current Password<br/> and New passowrd<br/> correctly..</p>
        </div>

        <form className='login-form'>

          <input 
            autoComplete='true' 
            type='text' 
            placeholder='Current password' 
            required 
            ref={e => inputElem.current.old = e}
            onChange={()=>setError({type:"oldpass",value :inputElem.current.old.value,oldpass:userObj.password})}
          />
          <div className='error2'>{error.current}</div>

          
          <input 
            onChange={e => setError({type:"password",value : e.target.value})} 
            autoComplete='true' 
            type='password' 
            placeholder='New password'
            required 
            ref={e => inputElem.current.password = e}
          />
          <div className='error2'></div>

           <input 
            onChange={e => setError({type:"password",value : e.target.value})} 
            autoComplete='true' 
            type='password' 
            placeholder='confirm password' 
            required 
            ref={e => inputElem.current.password = e}
          />
          <div className='error2'></div>

          <input className='submit-btn' type="submit" value='Change password' />
        </form>

      </div>
    </div>
    </div>
     
    </>
  )
}