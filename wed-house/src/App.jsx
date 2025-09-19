import './styles/App.css'
import Login,{Register} from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Products from './pages/products'
import Blogs from './pages/blogs'
import Cart from './pages/cart'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={'/signup'} element ={<Register/>}/>
      <Route path={'/login'} element ={<Login/>}/>
      <Route path={'/products'} element={<Products />} />
      <Route path={'/blogs'} element={<Blogs />} />
      <Route path={'/cart'} element ={<Cart />} />
    </Routes>
    </>
  )
}

export default App
