import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Componets/Layout'
import { ShoppingCartContex } from '../../Context'
import OrdersCard from '../../Componets/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContex)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 m-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders