import './styles/App.css'
import Login,{Register} from './components/Login'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path={'/signup'} element ={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
