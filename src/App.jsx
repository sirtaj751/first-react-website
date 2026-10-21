import { Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Auth from './pages/auth'
import Checkout from './pages/checkout'
import Navbar from './components/navbar'
import AuthProvider from './context/AuthContext'
import ProductDetail from './pages/productDetail'

function App() {

  return (
    <AuthProvider>
  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth"  element={<Auth/>}/>
      <Route path="/checkout"  element={<Checkout/>}/>
       <Route path="/products/:id"  element={<ProductDetail/>}/>
    </Routes>
  </div>
  </AuthProvider>
  )   
}

export default App
