
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

export default function NavBar() {

    // Obtenemos el total del carrito
    const { total } = useContext(CartContext);

    // Obtenemos el token y la función logout
    const { token, logout } = useContext(UserContext);

    console.log("TOKEN ACTUAL:", token);

    return (
        <nav className="navbar">

            <h2 className="navbar-logo">
                Pizzería Mamma Mía!
            </h2>

            <div className="navbar-links">

                <Link to="/">Home</Link>

                {token ? (
                    <>
                        <Link to="/profile">
                            🔓 Profile
                        </Link>

                        <button onClick={logout}>
                            🔒 Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            🔐 Login
                        </Link>

                        <Link to="/register">
                            🔐 Register
                        </Link>
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
