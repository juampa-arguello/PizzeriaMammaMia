import { useState } from "react"
import { pizzaCart } from "../data/pizzas"

export default function Cart() {
    const [cart, setCart]= useState(pizzaCart)

    function aumentarCantidad(id){
        setCart(cart.map( (item)=> item.id===id ? {...item, count:item.count+1} :item))
    }


    function disminuirCantidad(id){
        setCart(cart.map((item) => item.id===id ? {...item, count:item.count-1} :item).filter((item)=>item.count>0))

    }

    const total= cart.reduce((acu, item)=>acu+item.price*item.count,0)
    
  return (
    <div className="carrito">
      
      <h2>Detalles del pedido</h2>

      { cart.map( (item)=>(
        <div className="carrito-producto" key={item.id}>
            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p>Precio: ${item.price.toLocaleString("es-AR")} </p>

            <div className="carrito-cantidad">
                <button className="btn-menos" onClick={()=>disminuirCantidad(item.id)}>-</button>
                <span>{item.count}</span>
                <button className="btn-mas" onClick={()=>aumentarCantidad(item.id)}>+</button>
            </div>
              
        </div>
      ))}

     <h3 className="carrito-total">
            Total: ${total.toLocaleString("es-AR")}
        </h3>

      <button className="btn-pagar">Pagar</button>

    </div>
  )
}
