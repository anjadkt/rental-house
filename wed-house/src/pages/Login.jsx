import { useEffect, useRef, useState } from 'react'
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
      axios.post('http://localhost:5000/users',{
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
  const [err, setErr] = useState({});
  const navigate = useNavigate();
  const inputElem = useRef({
    email : null,
    password : null
  })

  useEffect(() => {
    document.body.style.backgroundColor = "rgba(192, 189, 189, 1)"; // change color

    return () => {
      document.body.style.backgroundColor = ""; // reset when leaving
    };
  }, []);

  async function checkUser (e){
    e.preventDefault()
    const obj = {}
    try{
      const res = await axios.get(`http://localhost:5000/users?email=${inputElem.current.email.value}`);
      console.log(res)
      const data = res.data[0] || [] ;
      if(data.length === 0){
        obj.email = "User not found"
      }
      if(data.password !== inputElem.current.password.value){
        obj.password = "Password incorrect!"
      }
      
      setErr(obj);

      if(Object.keys(obj)?.length === 0){
        localStorage.setItem('user',JSON.stringify({ user :{login : true,name :data.name,email:data.email}, cart : [],favorite : [] }));
        navigate('/');
      }
    }catch(err){
      console.log(err.message);
    }
  }
  

  return (
    <>
    <div className='main-container'>
      <div className='form-container'>
        <div className='welcome-div'>
          <h2>Login to your Account</h2>
          <p>Get started with our app, just create<br/> an account and enjoy the<br/> experience.</p>
        </div>

        <form className='login-form'>

          <label htmlFor='email'>Email</label>
          <input 
            onChange={e => setError({type:"email",value : e.target.value})} 
            autoComplete='true' 
            type='text' 
            placeholder='Enter your email' 
            id='email' required 
            ref={e => inputElem.current.email = e}
          />
          <div className='error'>{err && err.email || error.email}</div>

          <label htmlFor='password'>Password</label>
          <input 
            onChange={e => setError({type:"password",value : e.target.value})} 
            autoComplete='true' 
            type='password' 
            placeholder='Enter password' 
            id='password' 
            required 
            ref={e => inputElem.current.password = e}
          />
          <div className='error'>{error.password || err && err.password}</div>
          <div className='forgot-div'>Forgot password?</div>

          <input onClick={checkUser} className='submit-btn' type="submit" value='Sign in' />
          <div className='sign-up'> Don't have an account?<Link to="/signup"> Signup </Link></div>
        </form>

      </div>
      <img className='login-img' src="./loginpage.png" alt="login now" />
    </div>
    </>
  )
}