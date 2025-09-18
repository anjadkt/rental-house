import { useEffect, useRef } from 'react'
import '../styles/login.css'
import {Link,useNavigate} from 'react-router-dom'
import { useError } from '../customHooks/customHooks'
import axios from 'axios';

export function Register(){
  const [error,setError] = useError();
  const navigate = useNavigate();
  const inputElem = useRef({
    name : null,
    email : null,
    password : null
  })
  
  function setData (){

    const name = inputElem.current.name.value;
    const email = inputElem.current.email.value;
    const password = inputElem.current.password.value;
    let isError = true;

    for(let key in error){
      if(error[key]){
        isError = false ;
        break;
      }
    }
    if(isError){
      axios.post('http://localhost:5000/user',{
        id : Date.now(),
        name,
        email,
        password
      })
      navigate('/login');
    }
  }
  
  return (
    <>
     <div className='main-container'>
        <div className='reg-container'>
        <div className='welcome-div'>
          <h2>For every FOOTSTEP</h2>
          <p> Register Now to continue</p>
        </div>

        <form>
          <label htmlFor="name">Name</label>
          <input 
            ref={e=>inputElem.current.name = e} 
            onChange={e=>setError({type:"name",value : e.target.value})} 
            type="text" 
            required 
            placeholder='Enter name'
            id='name' 
          />

          <div className='error'>{error.name}</div>

          <label htmlFor="email">Email</label>
          <input  
            ref={e=>inputElem.current.email = e} 
            onChange={e=>setError({type:"email",value : e.target.value})} 
            type="email" 
            required 
            placeholder='Enter email' 
            id='email'
          />
          <div className='error'>{error.email}</div>

          <label htmlFor="password">Password</label>
          <input  
            ref={e=>inputElem.current.password = e} 
            onChange={e => setError({type:"password",value : e.target.value})} 
            type="password" 
            required 
            placeholder='Enter password' 
            id='password'
          />
          <div className='error'>{error.password}</div>
          
          <input 
            onClick={setData} 
            className='submit-btn' 
            type="submit" 
            value='Sign up now' 
          />
          <div className='error'></div>
          <div className='sign-up'> Already have an account?<Link to="/login">Login </Link></div>
        </form>
      </div>
     </div>
    </>
  )
}

export default function Login (){
  const [error,setError] = useError();
  

  return (
    <>
    <div className='main-container'>
      <div className='form-container'>
        <div className='welcome-div'>
          <h2>WELCOME BACK</h2>
          <p>Welcome back! please enter your details</p>
        </div>

        <form>
          <label htmlFor='email'>Email</label>
          <input onChange={e => setError({type:"email",value : e.target.value})} autoComplete='true' type='text' placeholder='Enter your email' id='email' required />
          <div className='error'>{error.email}</div>

          <label htmlFor='password'>Password</label>
          <input onChange={e => setError({type:"password",value : e.target.value})} autoComplete='true' type='password' placeholder='Enter password' id='password' required />
          <div className='error'>{error.password}</div>

          <div className='forgot-div'>Forgot password?</div>

          <input className='submit-btn' type="submit" value='Sign in' />
          <div className='sign-up'> Don't have an account?<Link to="/signup">signup for free </Link></div>
        </form>

      </div>
    </div>
    </>
  )
}