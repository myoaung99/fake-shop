import { useRoutes } from 'react-router'
import BookRequests from './components/BookRequests'
import CreateBook from './components/CreateBook'
import ProductList from './components/ProductList/ProductList'
import Orders from './components/Orders'
import MainMenu from './components/HOC/MainMenu'
import PrivateRoute from './components/PrivateRoute'
import ProductDetail from './components/ProductList/ProductDetail'

function App() {
  const routes = [
    {path:'/',element:<PrivateRoute><MainMenu/></PrivateRoute>,
    children:[
        {path:'/',element:<ProductList/>},
        {path:'/:id/productDetails',element:<ProductDetail/>},
        {path:'orders',element:<Orders/>},
        {path:'requests',element:<BookRequests/>},
        {path:'books',element:<CreateBook/>},
      ]
  },
  ]

  const element=useRoutes(routes)

  return (
    <section className='w-full h-screen'>
        {element}
    </section>
  )
}

export default App
