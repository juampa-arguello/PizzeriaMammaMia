
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import { UserContext } from "./context/UserContext";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

export default function App() {

    const { token } = useContext(UserContext);

    return (
        <div className="app">

            <NavBar />

            <main className="contenido-principal">

                <Routes>

                    {/* RUTA PRINCIPAL */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* DETALLE DE CADA PIZZA */}
                    <Route
                        path="/pizza/:id"
                        element={<Pizza />}
                    />

                    {/* CARRITO DE COMPRAS */}
                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                    {/* RUTA PROTEGIDA: PROFILE */}
                    <Route
                        path="/profile"
                        element={
                            token
                                ? <Profile />
                                : <Navigate to="/login" replace />
                        }
                    />

                    {/* LOGIN */}
                    <Route
                        path="/login"
                        element={
                            token
                                ? <Navigate to="/" replace />
                                : <Login />
                        }
                    />

                    {/* REGISTER */}
                    <Route
                        path="/register"
                        element={
                            token
                                ? <Navigate to="/" replace />
                                : <Register />
                        }
                    />

                    {/* RUTA NO ENCONTRADA */}
                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Routes>

            </main>

            <Footer />

        </div>
    );
}
