
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Pizza() {

    // Obtenemos el ID de la pizza desde la URL
    const { id } = useParams();

    // Obtenemos la función para agregar pizzas al carrito
    const { agregarPizza } = useContext(CartContext);

    // Estados para guardar la pizza y los errores
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState("");

    // Consultamos la API cuando cambia el ID
    useEffect(() => {

        setPizza(null);
        setError("");

        fetch(`http://localhost:5000/api/pizzas/${id}`)

            .then((respuesta) => {

                if (!respuesta.ok) {
                    throw new Error("Error HTTP: " + respuesta.status);
                }

                return respuesta.json();
            })

            .then((datos) => {
                setPizza(datos);
            })

            .catch((error) => {
                console.error("Error al cargar la pizza:", error);
                setError("No se pudo cargar la pizza.");
            });

    }, [id]);

    // Si ocurre un error
    if (error) {
        return <p>{error}</p>;
    }

    // Mientras esperamos la respuesta de la API
    if (pizza === null) {
        return <p>Cargando pizza...</p>;
    }

    return (
        <div className="detalle-pizza">

            <img
                src={pizza.img}
                alt={pizza.name}
            />

            <h2>{pizza.name}</h2>

            <p>{pizza.desc}</p>

            <h3>Ingredientes:</h3>

            <ul>
                {pizza.ingredients.map((ingrediente, i) => (
                    <li key={i}>
                        🍕 {ingrediente}
                    </li>
                ))}
            </ul>

            <h3>
                Precio: ${pizza.price.toLocaleString("es-AR")}
            </h3>

            <button
                onClick={() => agregarPizza(pizza)}
            >
                Añadir al carrito 🛒
            </button>

        </div>
    );
}
