
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function agregarPizza(pizza) {

        const existe = cart.find(
            (item) => item.id === pizza.id
        );

        if (existe) {

            setCart(
                cart.map((item) =>
                    item.id === pizza.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                { ...pizza, count: 1 }
            ]);

        }
    }

    // Calculamos el total del carrito
    const total = cart.reduce(
        (acum, item) => acum + item.price * item.count,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, setCart, agregarPizza, total }}
        >
            {children}
        </CartContext.Provider>
    );
}
