

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function NavBar() {

    const token = false;

    // Obtenemos el total del Context
    const { total } = useContext(CartContext);

    return (
        <nav className="navbar">

            <h2 className="navbar-logo">
                Pizzería Mamma Mía!
            </h2>

            <div className="navbar-links">

                <Link to="/">Home</Link>

                {token ? (
                    <>
                        <button>🔓 Profile</button>
                        <button>🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">🔐 Login</Link>
                        <Link to="/register">🔐 Register</Link>
                    </>
                )}

            </div>

            <div className="navbar-carrito">

                <Link to="/cart">
                    🛒 Total: ${total.toLocaleString("es-AR")}
                </Link>

            </div>

        </nav>
    );
}
