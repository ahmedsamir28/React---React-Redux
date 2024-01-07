import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Items from "./components/Items";
import ItemsDetails from "./components/ItemsDetails";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element = { <> <Landing/> <Items/> </>  } />

    <Route path="about" element={<About/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="item/:productId" element={<ItemsDetails/>}/>
  </Routes>
  </>
  );
}

export default App;
