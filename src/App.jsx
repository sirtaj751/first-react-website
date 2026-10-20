import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Auth from './pages/auth'
import Checkout from './pages/checkout'
import Navbar from './components/navbar'

function App() {

  return <div className='app'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth"  element={<Auth/>}/>
      <Route path="/checkout"  element={<Checkout/>}/>
    </Routes>
  </div>
    
}

export default App
