
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

function App() {

  return (
    <div className="app">

      <NavBar />

      <main className="contenido-principal">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;

