import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Basket from "./Basket";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  const [basketSize, setBasketSize] = useState(0);
  const [cart, setCart] = useState([{}]);
  return (
    <>
      <nav>
        <Header basketSize={basketSize} />
      </nav>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home basketSize={basketSize} setBasketSize={setBasketSize} />
          }
        ></Route>
        <Route exact path="/basket" element={<Basket cart={cart} />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
