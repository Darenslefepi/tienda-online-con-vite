import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContex } from '../../Context'
import './styles.css'/* como talwin no puede manejar 360px, toco crear el archivo e importarlo */

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContex)

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
        </aside>
    )
}

export default CheckoutSideMenu