import { useContext } from "react"
import { ShoppingCartContex } from '../../Context'
import Card from "../../Componets/Card"
import Layout from "../../Componets/Layout"
import ProductDetail from "../../Componets/ProductDetail"

function Home() {

  const context = useContext(ShoppingCartContex)

  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none" 
          type="text" 
          placeholder="Search a Product"
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          context.items?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
        <ProductDetail />
      </Layout>
  )
}
  
  export default Home