import '../styles/home.css'
import { useFetch } from '../customHooks/customHooks'
import {Link} from 'react-router-dom'
import Product from '../components/product';
import { useState } from 'react';
import Dropdown, { UserDrop } from '../components/dropdown';

export default function Home (){
  const [products] = useFetch(' http://localhost:5000/products?_page=1&_limit=8');
  const [drop,setDrop] = useState(false);
  const [userdrop,setUserdrop] = useState(false)

  return(
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
            <div className='cart-count-div'>0</div>
            </Link>
          </div> 
        
        <div className='user-container-div' onClick={()=>setUserdrop(!userdrop)}>
          <img className='icons user-icon' src="./icons/user.png" alt="" />
          <p>
            Login
            <img style={{transform : userdrop ? "rotate(-180deg)" : "rotate(0deg)",color:"green",transition: "transform 0.3s ease"}} className='downarrow use-arrow' src="./icons/downarrow.png" />
          </p>
          {userdrop && <UserDrop/>}
        </div>
      </div>

     </header>

     <main>

      <div className='home-overview-contianer'>
        <div className='main-slogan'>
          Express <span>&ndash;</span> yourself <br />through style<span>.</span>
        </div>
        <div>
          <img className='main-image' src="./main-background.png" alt="" />
        </div>
      </div>

      <hr />

      <div className='popular-product-container'>
        <div className='p-product-h'>Popular Products.</div>
        <div className='popular-product-div'>
         { products &&
           products.map((product)=>(
            <Product key={product.id} data={product} />
           ))
         }
        </div>
        <div className='show-more-div'><button>Show More..</button></div>
      </div>

      <hr />

     </main>
    </>
  )
}