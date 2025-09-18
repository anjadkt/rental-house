
import '../styles/home.css'
export default function Product ({data}){
  return (
    <>
     <div className='product-div'>
      <div className='product-dis'>
        <div>
          <h4>{data.name}</h4 >
          <p>{data.color} Colors</p>
        </div>
        <div>
          <img src="./icons/favorite3.png" alt="favorite" />
        </div>
        
      </div>
      <div className='product-img-div'>
        <img className='product' src={`./products/shoe-${data.id}.png`} alt="img" />
      </div>
      <div className='product-rating-div'>
        <div>
          <img src={`./ratings/rating-${data.rating}.png`} alt="img" />
        </div>
        <p>{(data.rating/10).toFixed(1)}</p>
      </div>
      <div className='product-count-div'>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className='product-price-div'>
       <button>Add to Cart</button>
       <p><span>&#8377;</span>{data.price}</p>
      </div>

     </div>
    </>
  )
}