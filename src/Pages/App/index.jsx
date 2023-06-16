import { useRoutes, BrowserRouter } from 'react-router-dom' /* Esto conecta las paginas, si estoy en home y doy click en MyOrder, me envia ally */
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../Signin'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:  <Home /> },
    { path: '/my-account', element:  <MyAccount /> },
    { path: '/my-order', element:  <MyOrder /> },
    { path: '/my-orders', element:  <MyOrders /> },
    { path: '/sign-in', element:  <SignIn /> },
    { path: '/*', element:  <NotFound /> },
  ])
  return routes
};

const App = () => {
  
  return (
    <BrowserRouter>
      <AppRoutes />{/* aqui estan encapsuladas todas las rutas */}
    </BrowserRouter>
  )
}

export default App