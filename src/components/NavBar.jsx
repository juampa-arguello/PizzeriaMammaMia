import { Link } from "react-router-dom";


export default function NavBar() {

    const total = 2500
    const token = false

    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Pizzería Mamma Mía!</h2>

            <div className="navbar-links">
                <Link to="/">Home</Link>

                 {
                token ? (
                    <>
                        <button >🔓 Profile</button>
                        <button >🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" >🔐 Login</Link>
                        <Link to="/register" >🔐 Register</Link>
                    </>
                )

            }

            </div>

           

            <div className="navbar-carrito">
                <button>
                    🛒 Total: ${total.toLocaleString("es-AR")}
                </button>
            </div>

        </nav>
    )
}
