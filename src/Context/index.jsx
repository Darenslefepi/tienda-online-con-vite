import { createContext, useState, useEffect} from "react";

export const ShoppingCartContex = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart --- Increment Quantity
    const [count, setCount] = useState(0)/* para llevar la cuenta del carrito */
    
    // Product Detail --- Open/Close
    const [isproductDetailOpen, setIsproductDetailOpen] = useState(false)/* para llevar el registro si esta abierto o cerrado una card */
    const openProductDetail = () => setIsproductDetailOpen(true)/* para abrir la informacion lateral al presionar en cualquier lado de la card */
    const closeProductDetail = () => setIsproductDetailOpen(false)/* para cerrar la informacion adicional al presionar x */
    
    // Checkout Side Menu --- Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)/* para llevar el registro si esta abierto o cerrado una card */
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)/* para abrir la informacion lateral al presionar en cualquier lado de la card */
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail --- Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart --- Add Products to Cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart --- Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle: ', searchByTitle);

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContex.Provider>
    )
}