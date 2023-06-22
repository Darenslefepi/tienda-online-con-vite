import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContex } from '../../Context'
import './styles.css'/* como talwin no puede manejar 360px, toco crear el archivo e importarlo */

const ProductDetail = () => {
    const context = useContext(ShoppingCartContex)

    return (
        <aside 
            className={`${context.isproductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>{/* toca asi para poder combinar comandos talwin con logica */}
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button>
                    <XMarkIcon 
                        className='h-6 w-6 text-black'
                        onClick={() => context.closeProductDetail()}/>
                </button>
            </div>
                <figure className='px-6'>
                    <img 
                    className='w-full h-full rounded-lg' 
                    src={context.productToShow.images} 
                    alt={context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>${context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
                </p>
        </aside>
    )
}

export default ProductDetail