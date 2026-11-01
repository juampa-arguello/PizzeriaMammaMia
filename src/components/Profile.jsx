
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Profile() {

    const { token, logout } = useContext(UserContext);

    return (
        <div className="profile">

            <h2>Mi Perfil</h2>

            <p>
                Bienvenido a Pizzería Mamma Mía!
            </p>

            <p>
                Estado de sesión: {token ? "Activa" : "Inactiva"}
            </p>

            <Link to="/">
                Volver al inicio
            </Link>

            <button onClick={logout}>
                Cerrar sesión
            </button>

        </div>
    );
}
