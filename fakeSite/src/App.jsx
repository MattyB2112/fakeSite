import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Basket from "./Basket";
import ErrorPage from "./ErrorPage";
import ItemPage from "./ItemPage";
import Login from "./Login";
import Banner from "./Banner";
import SignUp from "./SignUp/SignUp";
import ProfilePage from "./ProfilePage";
import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { deleteFromBasket, getCart, updateCart } from "./APICalls";
import SearchBar from "./SearchBar";
import ScrollToTop from "./ScrollToTop";
import LandingPage from "./LandingPage";
import background from "../src/assets/triangles_pattern.png";

function App() {
  const [basket, setBasket] = useState([]);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basketChanged, setBasketChanged] = useState(false);
  const [basketSize, setBasketSize] = useState(0);

  const handleBasketChange = (product_id, user_id, quantity, size) => {
    updateCart(product_id, user_id, quantity, size).then(() => {
      setBasketChanged(true);
    });
  };

  const handleBasketDelete = (product_id, user_id, size) => {
    deleteFromBasket(product_id, user_id, size).then(() => {
      setBasketChanged(true);
    });
  };

  const handleBasketUpdate = () => {
    setBasketChanged(true);
  };

  useEffect(() => {
    getCart(signedInUser)
      .then((result) => {
        if (result.data.basket !== 0) {
          setBasket(result.data.basket);
          setBasketSize(result.data.basket.length);
          setBasketChanged(false);
        } else {
          setBasket([]);
          setBasketSize(0);
          setBasketChanged(false);
        }
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [basketChanged, signedInUser]);

  return (
    <>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header basketSize={basketSize} />
                <LandingPage />
              </>
            }
          ></Route>
          <Route
            exact
            path="/products/all"
            element={
              <>
                <Header basketSize={basketSize} />
                <SearchBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/products/new"
            element={
              <>
                <Header basketSize={basketSize} />
                <SearchBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/products/mens"
            element={
              <>
                <Header basketSize={basketSize} />
                <SearchBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/products/womens"
            element={
              <>
                <Header basketSize={basketSize} />
                <SearchBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/products/kids"
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
            path="products/:product_id"
            element={
              <>
                <Header basketSize={basketSize} />
                <ItemPage handleBasketUpdate={handleBasketUpdate} />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              localStorage.getItem("auth_token") ? (
                <>
                  <Header basketSize={basketSize} />
                  <ProfilePage />
                </>
              ) : (
                <>
                  <Header basketSize={basketSize} />
                  <Login />
                </>
              )
            }
          />
          <Route
            path="/login"
            element={
              localStorage.getItem("auth_token") ? (
                <Navigate to="/profile" />
              ) : (
                <>
                  <Header basketSize={basketSize} />
                  <Login />
                </>
              )
            }
          />
          <Route
            path="/signup"
            element={
              localStorage.getItem("auth_token") ? (
                <Navigate to="/profile" />
              ) : (
                <>
                  <Header basketSize={basketSize} />
                  <SignUp />
                </>
              )
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <Header basketSize={basketSize} />
                <ErrorPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
