export default function NavBar() {

    const total = 2500
    const token = true

    return (
        <nav className="navbar">
            <h2 className="navbar-logo">Pizzería Mamma Mía!</h2>

            <div className="navbar-links">
                <button>Home</button>

                 {
                token ? (
                    <>
                        <button >🔓 Profile</button>
                        <button >🔒 Logout</button>
                    </>
                ) : (
                    <>
                        <button >🔐 Login</button>
                        <button >🔐 Register</button>
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
