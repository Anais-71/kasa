import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Housing from '../pages/housing/Housing'
import Error from '../components/error/Error'

const Routes = [
  { route: '/', element: <Home /> },
  { route: '/about', element: <About /> },
  { route: '/logement/:id', element: <Housing /> },
  { route: '/404', element: <Error /> },
  { route: '*', element: <Error /> },
]

export default Routes
