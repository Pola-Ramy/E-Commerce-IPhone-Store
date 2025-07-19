import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import ShoppingCart from "./Components/ShoppingCart";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <ShoppingCart />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
