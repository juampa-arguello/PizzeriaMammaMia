import { useEffect, useState } from "react"

export default function Pizza() {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {

        fetch("http://localhost:5000/api/pizzas/p001")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error HTTP: " + respuesta.status);
                }

                return respuesta.json();
            })
            .then((datos) => {
                console.log("Pizza recibida:", datos);
                setPizza(datos);
            })
            .catch((error) => {
                console.error("Error al cargar la pizza:", error);
            });

    }, []);

    if (pizza === null) {
        return <p>Cargando pizza...</p>;
    }



  return (
     <div className="card-Pizza">

            <img src={pizza.img} alt={pizza.name} />

            <h3>{pizza.name}</h3>

            <p>{pizza.desc}</p>

            <h3>Ingredientes:</h3>

            <ul>
                {pizza.ingredients.map((ingrediente, i) => (
                    <li key={i}>{ingrediente}</li>
                ))}
            </ul>

            <h3>
                Precio: ${pizza.price.toLocaleString("es-AR")}
            </h3>

            <button>Añadir al carrito</button>

        </div>
  )
}
