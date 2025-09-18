import '../styles/home.css'
import { useFetch } from '../customHooks/customHooks'
import {Link} from 'react-router-dom'
import Product from '../components/product';

export default function Home (){
  const [products] = useFetch(' http://localhost:5000/products?_page=1&_limit=8');
  return(
    <>
     <header>
      <div className="logo-div">
        <Link className='nav-links' to='/'><h1>FootSter.</h1></Link>
      </div>
      <nav>
        <div><Link className='nav-links' to='/'>Home</Link></div>
        <div>products <img className='downarrow' src="./icons/downarrow.png" alt="" /></div>
        <div>category <img className='downarrow' src="./icons/downarrow.png" alt="" /></div>
        <div>blogs</div>
      </nav>
      <div className="buttons-container">
        <div>
          <img className='icons' src="./icons/search.png" alt="search for products.." />
        </div>
        <div>
          <img className='icons' src="./icons/favorite.png" alt="fav" />
        </div>
        <div>
          <img className='icons' src="./icons/cart.png" alt="" />
        </div>
        <div>
          <img className='icons' src="./icons/user.png" alt="" />
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