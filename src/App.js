import './App.css';
import Header from './Component/Header'
import Home from './Component/Home';
import Products from './Component/Products';
import { Routes, Route } from "react-router-dom";
import Product from './Component/Product';
import Cart from './Component/Cart';
import { Payment } from './Component/Payment';
import SignUp from './Component/Signup';



function App() {
  return (
    <>
      <Header />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>

    </>
  );
}

export default App;
