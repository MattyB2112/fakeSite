import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  const [basketSize, setBasketSize] = useState(0);
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
            <>
              <Home basketSize={basketSize} setBasketSize={setBasketSize} />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
