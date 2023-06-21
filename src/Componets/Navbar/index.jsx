import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContex } from "../../Context";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const context = useContext(ShoppingCartContex)
    const activeStyle = 'underline underline-offset-4'/* esta es la clase de linea */

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/'
                        className={({ isActive }) =>/* Toda esta repetidera es para colocar una linea debajo de cada palabra de la seccion */
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/clothes'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/electronics'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/fornitures'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/toys'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/others'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    darens@gmail.com
                </li>
                <li>
                    <NavLink to = '/my-orders'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sign-in'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex justify-between items-center">
                <ShoppingBagIcon className='h-6 w-6 text-black'/>{context.count}
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;