import {Link,useNavigate} from 'react-router-dom'
import Dropdown,{UserDrop} from './dropdown';
import {  useEffect, useState } from 'react';

export default function Header (){
  const [drop,setDrop] = useState(false);
  const [userdrop,setUserdrop] = useState(false);
  const {cart,user} = JSON.parse(localStorage.getItem('user')) || {
    user : {login:false},
    cart :[]
  }
  const navigate = useNavigate();
  
  function checkLogin (){
    if(user.login){
      setUserdrop(!userdrop)
    }else{
      navigate('/login')
    }
  }

  return (
    <>
     <header>

      <div className="logo-div">
        <Link className='nav-links' to='/'><h1>FootSter.</h1></Link>
      </div>

      <nav>
          <div><Link className='nav-links' to='/'>Home</Link></div>
          <div><Link className='nav-links' to='/products'>Products</Link></div>
          <div 
          className='nav-links rel-drop' 
          onClick={()=>setDrop(!drop)}>
            Catagory 
            <img style={{transform : drop ? "rotate(-180deg)" : "rotate(0deg)",color:"green",transition: "transform 0.3s ease"}} className='downarrow' src="./icons/downarrow.png" />
            {drop && <Dropdown/>}
          </div>
          <div><Link to='/blogs' className='nav-links'>blogs</Link></div>
      </nav>

      <div className="buttons-container">
        <div>
          <input className='search-bar' type="text" placeholder='Search for products..' />
          <img className='icons search-icon' src="./icons/search.png" alt="search for products.." />
        </div>
        
          <div className='cart-div'>
            <Link to='/cart'>
            <img className='icons' src="./icons/cart.png" alt="" />
            <div className='cart-count-div'>{cart.length}</div>
            </Link>
          </div> 
        
        <div className='user-container-div' onClick={checkLogin}>
          <img className='icons user-icon' src="./icons/user.png" alt="" />
          <p>
            {user.login ? user.name : "Login"}
            <img style={{transform : user.login && userdrop ? "rotate(-180deg)" : "rotate(0deg)",color:"green",transition: "transform 0.3s ease"}} className='downarrow use-arrow' src="./icons/downarrow.png" />
          </p>
          { user.login && userdrop && <UserDrop/>}
        </div>
      </div>

     </header>
    </>
  )
}