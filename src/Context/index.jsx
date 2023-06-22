import { createContext, useState} from "react";

export const ShoppingCartContex = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart --- Increment Quantity
    const [count, setCount] = useState(0)/* para llevar la cuenta del carrito */
    
    // Product Detail --- Open/Close
    const [isproductDetailOpen, setIsproductDetailOpen] = useState(false)/* para llevar el registro si esta abierto o cerrado una card */
    const openProductDetail = () => setIsproductDetailOpen(true)/* para abrir la informacion lateral al presionar en cualquier lado de la card */
    const closeProductDetail = () => setIsproductDetailOpen(false)/* para cerrar la informacion adicional al presionar x */
    
    // Product Detail --- Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart --- Add Products to Cart
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContex.Provider value={{
            count,
            setCount,
            isproductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContex.Provider>
    )
}