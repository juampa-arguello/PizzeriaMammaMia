export default function CardPizza({
  id,
  name,
  price,
  ingredients,
  img,
  desc,
}) {
  return (
    <div className="card-Pizza">
      {/* Imagen */}
      <img src={img} alt={name} />

      {/* Name */}
      <h3>{name}</h3>

      {/* ID */}
      <p>ID: {id}</p>

       {/* Descripción */}
       {/* Si existe una descripción, se muestra. Si no, no se muestra nada. */}
        {desc && (
          <p className="card-descripcion">
            {desc}
          </p>
        )}


      {/* Ingredientes */}
      <div className="ingredientes">

        <p>Ingredientes:</p>

        <ul>
          {ingredients.map( (ing, i)=>(
            <li key={i}>
              {i===0 ? "🍕 " :""}
              {ing}
              {i<ingredients.length-1 ? ", " : ""}
            </li>
          ))}
        </ul>


      </div>

      {/* Precio */}
      <p>Precio: ${price}</p>

      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
}
