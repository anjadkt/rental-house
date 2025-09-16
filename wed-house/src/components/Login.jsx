import '../styles/login.css'
import {Link} from 'react-router-dom'

export function Register(){

  
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
          <input type="text" required placeholder='Enter name' id='name' />
          <div className='error'></div>

          <label htmlFor="email">Email</label>
          <input type="email" required placeholder='Enter email' id='email'/>
          <div className='error'></div>

          <label htmlFor="password">Password</label>
          <input type="password" required placeholder='Enter password' id='password'/>
          <div className='error'></div>
          
          <input className='submit-btn' type="submit" value='Sign up now' />
          <div className='sign-up'> Already have an account?<Link to="/">Login </Link></div>
        </form>
      </div>
     </div>
    </>
  )
}

export default function Login (){
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
          <input autoComplete='true' type='text' placeholder='Enter your email' id='email' required />
          <div className='error'></div>

          <label htmlFor='password'>Password</label>
          <input autoComplete='true' type='password' placeholder='Enter password' id='password' required />
          <div className='error'></div>

          <div className='forgot-div'>Forgot password?</div>

          <input className='submit-btn' type="submit" value='Sign in' />
          <div className='sign-up'> Don't have an account?<Link to="/signup">signup for free </Link></div>
        </form>

      </div>
    </div>
    </>
  )
}