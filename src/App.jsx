import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Pizza from './components/Pizza'



function App() {
  

  return (
    <>
      <NavBar/>
      
      {/* <Home /> */}
       <Pizza />
      {/* <Login /> */}
      {/* <Register /> */}

      {/*<Cart/>*/}
      
      <Footer/>  
    </>
  )
}

export default App
