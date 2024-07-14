import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Basket from "./Basket";
import ItemPage from "./ItemPage";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { UserContext } from "./UserContext";
import { deleteFromBasket, getCart, updateCart } from "./APICalls";
import SearchBar from "./SearchBar";

function App() {
  const [basket, setBasket] = useState([]);
  const [signedInUser, setSignedInUser] = useState({ user_id: 1 });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basketChanged, setBasketChanged] = useState(false);

  const handleBasketChange = (product_id, user_id, quantity) => {
    updateCart(product_id, user_id, quantity).then((result) => {
      setBasketChanged(true);
    });
  };

  const handleBasketDelete = (product_id, user_id) => {
    deleteFromBasket(product_id, user_id).then((result) => {
      setBasketChanged(true);
    });
  };

  useEffect(() => {
    getCart(signedInUser.user_id)
      .then((result) => {
        setBasket(result.data.basket);
        setBasketChanged(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [basketChanged]);

  return (
    <>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
        <nav>
          <Header basket={basket} basketChanged={basketChanged} />
          <SearchBar />
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/basket"
            element={
              <Basket
                basket={basket}
                onBasketChange={handleBasketChange}
                onBasketDelete={handleBasketDelete}
              />
            }
          ></Route>
          <Route
            path="/:product_id"
            element={
              <ItemPage
                basket={basket}
                setBasket={setBasket}
                // handleCartChange={handleCartChange}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
