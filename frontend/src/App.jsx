
import './App.css'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Card from "./pages/Cart/Card"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
function App() {
 

  return (
    <BrowserRouter >
    <div className='app' >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
