import { useContext } from 'react'
import { Link } from 'react-router-dom' 
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContex } from '../../Context'
import OrderCard from '../../Componets/OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'/* como talwin no puede manejar 360px, toco crear el archivo e importarlo */

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContex)
/* funcion para eliminar productos del carro */
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.cartProducts.length-1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>{/* toca asi para poder combinar comandos talwin con logica */}
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                    <XMarkIcon 
                        className='h-6 w-6 text-black'
                        onClick={() => context.closeCheckoutSideMenu()}/>
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>{/* esto hace que se vean y acumelen los productos es en el carrito My Order */}
                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                <span className='font-light'>Total: </span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu