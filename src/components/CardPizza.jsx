
export default function CardPizza({name, price, ingredientes, img}) {
  return (
    <div className="card-Pizza">
        <img src={img} alt="imagen" />

        <h3>{name}</h3>

        <p>Ingredientes: {ingredientes.join(", ")}</p>

        <p>Precio: ${price}</p>

        <button>Ver más</button>
        <button>Añadir</button>
    </div>
  )
}
