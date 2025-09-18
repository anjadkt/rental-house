import './styles/App.css'
import Login,{Register} from './components/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path={'/signup'} element ={<Register/>}/>
      <Route path={'/login'} element ={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
