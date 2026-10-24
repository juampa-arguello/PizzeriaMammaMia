import Header from "./Header";
import CardPizza from "./CardPizza";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="contenedor-pizzas">
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

      </div>



    </div>
  );
}
