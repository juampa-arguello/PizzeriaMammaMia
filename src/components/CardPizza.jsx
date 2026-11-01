
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CardPizza({
    id,
    name,
    price,
    ingredients,
    img,
    desc
}) {

    // Obtenemos la función del carrito compartido
    const { agregarPizza } = useContext(CartContext);

    return (
        <div className="card-Pizza">

            <img src={img} alt={name} />

            <div className="card-contenido">

                <div className="card-encabezado">
                    <h3>{name}</h3>
                    <p>ID: {id}</p>
                </div>

                <p className="card-descripcion">
                    {desc}
                </p>

                <h4>Ingredientes:</h4>

                <ul className="card-ingredientes">
                    {ingredients.map((ingrediente, i) => (
                        <li key={i}>
                            🍕 {ingrediente}
                        </li>
                    ))}
                </ul>

                <div className="card-inferior">

                    <h3>
                        Precio: ${price.toLocaleString("es-AR")}
                    </h3>

                    <div className="card-botones">

                        <button className="btn-ver-mas">
                            Ver más 👁️
                        </button>

                        <button
                            className="btn-anadir"
                            onClick={() => agregarPizza({
                                id,
                                name,
                                price,
                                ingredients,
                                img,
                                desc
                            })}
                        >
                            Añadir 🛒
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}
