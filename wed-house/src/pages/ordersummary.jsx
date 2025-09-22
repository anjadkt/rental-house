import { useEffect, useState } from 'react'
import '../styles/order.css'
import { Link } from 'react-router-dom';

export default function OrderSummary (){
  const [userObj,setUserObj] = useState(JSON.parse(localStorage.getItem('user')));
  const [price,setPrice] = useState({
    items : 0,
    handle : 0,
    platform : 0,
    discount : 0,
    total : 0
  });

  useEffect(()=>{
    setPrice(pre => {
      const newPrice = {...price}
      userObj.cart.forEach(v=>{
        newPrice.items += v.price ;
      });
      newPrice.handle = 27;
      newPrice.platform = Number(userObj.cart.length * 2);
      const total = newPrice.items + newPrice.handle + newPrice.platform ;
      newPrice.total = Math.round(total/100) * 100 ;
      newPrice.discount = total - newPrice.total ;
      return newPrice;
    })
  },[])

  return (
    <>
      <header className='header-div'>
        <div className="logo-div">
          <Link className='nav-links' to='/'><h1>FootSter.</h1></Link>
        </div>
        <div className='cart-item'>
          <h2>Order Summary</h2>
        </div>
        <div>
          <input className='cart-search-bar' type="text" placeholder='Search for products..' />
          <img className='cart-search-icon' src="./icons/search.png" alt="search for products.." />
        </div>
      </header>
      <div className='order-summary-all-container'>
        <div>
          <div className='order-summary-product-div'>
            {
              userObj.cart.map((v,i)=>(
                <div key={i} className='order-summary-product'>
                  <div>
                    <img className='order-summary-img' src={`./products/shoe-${v.id}.png`} alt="order-details" />
                  </div>
                  <div className='details'>
                    <div>Colors : {v.color}</div>
                    <div>Quantity : {v.quantity}</div>
                    <div>Price : {v.price}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='order-address-details'>
            <h2>Delivery Address</h2>
            <form className='address-form'>
              <div>
                <input required type="text" placeholder='Name' />
                <input required type="number" placeholder='Number'/>
              </div>
              <div>
                <input required  type="number" placeholder='Pincode' />
                <input required type="text" placeholder='City/District/Town' />
              </div>
              <div>
                <textarea required placeholder='Address (area and street)'></textarea>
              </div>
              <div>
                <input required type="text" placeholder='State'/>
                <input required type="text" placeholder='Country'/>
              </div>
              <div>
                <input type="text" placeholder='Land Mark (optional)' />
                <select>
                  <option>COD</option>
                  <option>UPI</option>
                  <option>CREDIT CARD</option>
                  <option>DEBIT CARD</option>
                </select>
              </div>
              <input className='set-address' type="submit" value='SAVE & DELIVER HERE' />
              
            </form>
          </div>
        </div>
        <div className='cart-order-summary'>
          <h3>TOTAL PRICE</h3>
          <div>
            <div>Items ({userObj.cart.length}) :</div>
            <div>&#8377;{price.items}</div>
          </div>
          <div>
            <div>Handling :</div>
            <div>&#8377;{price.handle}</div>
          </div>
          <div>
            <div>Platform fee :</div>
            <div>&#8377;{price.platform}</div>
          </div>
          <div>
            <div>Discount :</div>
            <div>- &#8377;{price.discount}</div>
          </div>
          <hr />
          <div>
            <h4>Total Payable :</h4>
            <h4>&#8377;{price.total}</h4>
          </div>
        </div>
      </div>
    </>
  )
}