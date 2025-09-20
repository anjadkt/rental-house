import {Link} from 'react-router-dom'
import '../styles/home.css'
import '../styles/cart.css'
import CartItem from '../components/cartItems'

export default function Cart(){
  const {cart} = JSON.parse(localStorage.getItem('user')) || {
    cart : []
  }
  return (
    <>
     <header className='header-div'>
        <div className="logo-div">
          <Link className='nav-links' to='/'><h1>FootSter.</h1></Link>
        </div>
        <div className='cart-item'>
          <h2>Anjad's Cart (<span>{cart.length} Items</span>)</h2>
        </div>
        <div>
          <input className='cart-search-bar' type="text" placeholder='Search for products..' />
          <img className='cart-search-icon' src="./icons/search.png" alt="search for products.." />
        </div>
     </header>
     <h2 className='order-review'>Review your Order</h2>
     <div className='all-cart-items'>
        <div className="cart-items">
          {
            cart.map((v,i)=>(
              <CartItem key={i} data={v}/>
            ))
          }
        </div>
        <div className='cart-order-summary'>
          <h3>Order Summary</h3>
          <div>
            <div>Items (3):</div>
            <div>$42.75</div>
          </div>
          <div>
            <div>Shipping & handling:</div>
            <div>$4.99</div>
          </div>
          <div>
            <div>Total before tax:</div>
            <div>$47.74</div>
          </div>
          <div>
            <div>Estimated tax (10%):</div>
            <div>$4.77</div>
          </div>
          <hr />
          <div>
            <h4>Order total:</h4>
            <h4>$52.51</h4>
          </div>
          <div>
            <button>Place your Order</button>
          </div>
        </div>
     </div>
    </>
  )
}