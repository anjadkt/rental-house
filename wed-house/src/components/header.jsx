import {Link,useNavigate} from 'react-router-dom'
import Dropdown,{UserDrop} from './dropdown';
import {  useEffect, useState } from 'react';

export default function Header (){
  const [drop,setDrop] = useState(false);
  const [userdrop,setUserdrop] = useState(false);
  const {cart,login,name} = JSON.parse(localStorage.getItem('user')) || {
    login : false,
    cart :[]
  }
  const navigate = useNavigate();

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
        
          <div className='cart-div' onClick={ ()=> login ? navigate('/cart') : navigate('/login')}>
            <img className='icons' src="./icons/cart.png" alt="" />
            <div className='cart-count-div'>{cart.length}</div>
          </div> 
        
        <div className='user-container-div' onClick={()=> login ? setUserdrop(!userdrop) : navigate('/login') }>
          <img className='icons user-icon' src="./icons/user.png" alt="" />
          <p>
            {login ? name : "Login"}
            <img style={{transform : login && userdrop ? "rotate(-180deg)" : "rotate(0deg)",color:"green",transition: "transform 0.3s ease"}} className='downarrow use-arrow' src="./icons/downarrow.png" />
          </p>
          { login && userdrop && <UserDrop/>}
        </div>
      </div>

     </header>
    </>
  )
}