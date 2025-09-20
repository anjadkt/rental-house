export default function CartItem({data}){
  return (
    <>
     <div className="cart-product-container">
      <h3>Delivery date: Tuesday, June 21</h3>
      <div className="product-details-container">
        <div className="cart-img-div">
          <img className="cart-product-img" src={`./products/shoe-${data.id}.png`} alt="product image" />
        </div>
        <div className="product-details-div">
          <p>{data.name}</p>
          <h4>&#8377;{data.price}</h4>
          <div className="quantity-div">
            Quantity :
            <button>-</button>
            <span>{data.quantity}</span>
            <button>+</button>
          </div>
          <div className="save-remove-div">
            <button className="save-later">Save for Later</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="Product-delivery-div">
          <h4>Choose a delivery option :</h4>
          <div>
            <label htmlFor="delivery1">
              <input id="delivery1" type="radio" />
              <p>Tuesday, June 21<br /><span>FREE Shipping</span></p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery2">
              <input id="delivery2" type="radio" />
              <p>Monday, June 17<br /><span>&#8377;189 - Shipping</span></p>
            </label>
          </div>
          <div>
            <label htmlFor="delivery3">
              <input id="delivery3" type="radio" />
              <p>Sunday, June 15<br /><span>&#8377;289 - Shipping</span></p>
            </label>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}