import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Basket from "./Basket";
import ItemPage from "./ItemPage";
import Login from "./Login";
import Banner from "./Banner";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { deleteFromBasket, getCart, updateCart } from "./APICalls";
import SearchBar from "./SearchBar";

function App() {
  const [basket, setBasket] = useState([]);
  const [signedInUser, setSignedInUser] = useState({ user_id: 1 });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basketChanged, setBasketChanged] = useState(false);
  const [basketSize, setBasketSize] = useState(basket.length);

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

  const handleBasketUpdate = () => {
    setBasketChanged(true);
  };

  useEffect(() => {
    getCart(signedInUser.user_id)
      .then((result) => {
        setBasket(result.data.basket);
        let sizeofbasket = 0;
        for (let i = 0; i < result.data.basket.length; i++) {
          if (result.data.basket[i].product_id !== null) {
            sizeofbasket++;
          }
        }
        setBasketSize(sizeofbasket);
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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header basketSize={basketSize} />
                <SearchBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/basket"
            element={
              <>
                <Header basketSize={basketSize} />
                <Basket
                  basket={basket}
                  onBasketChange={handleBasketChange}
                  onBasketDelete={handleBasketDelete}
                />
              </>
            }
          ></Route>
          <Route
            path="/:product_id"
            element={
              <>
                <Header basketSize={basketSize} />
                <ItemPage
                  basket={basket}
                  setBasket={setBasket}
                  onBasketUpdate={handleBasketUpdate}
                />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Header basketSize={basketSize} />
                <Login />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
