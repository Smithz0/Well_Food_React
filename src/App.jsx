import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Place_order from "./pages/Place_order/Place_order";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/Loginpopup/Loginpopup";

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  return (

    
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar  setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Place_order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};


export default App;
