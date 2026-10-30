import Header from "./Header";
import CardPizza from "./CardPizza";
//import { pizzas } from "../data/pizzas";
import { useState, useEffect } from "react";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((respuesta) => respuesta.json())
      .then((datos) => setPizzas(datos));
  }, []);

  return (
    <div>
      <Header />

      {/*<div className="contenedor-pizzas">
        <CardPizza
          name="Pizza Napolitina"
          price="5.950"
          ingredientes={["mozzarella", "tomates", "jamón", "oregano"]}
          img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60"
        />

        <CardPizza
          name="Pizza Española"
          price="6.950"
          ingredientes={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60"
        />

        <CardPizza
          name="Pizza Pepperoni"
          price="6.950"
          ingredientes={["mozzarella", "pepperoni", "oregano"]}
          img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60"
        />

      </div>*/}

      <div className="contenedor-pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </div>
  );
}
