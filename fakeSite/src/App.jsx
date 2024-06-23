import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Basket from "./Basket";
import ItemPage from "./ItemPage";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";

function App({ children }) {
  const [cart, setCart] = useState([]);
  const [signedInUser, setSignedInUser] = useState({ user_id: 1 });

  return (
    <>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
        <nav>
          <Header cart={cart} />
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/basket" element={<Basket cart={cart} />}></Route>
          <Route
            path="/:product_id"
            element={<ItemPage cart={cart} setCart={setCart} />}
          ></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
