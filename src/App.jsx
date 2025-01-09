import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hospitals from './components/Hospitals';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/hospital',
    element: <Hospitals />
  }
])

function App() {
  return (
     
      <div>
        <RouterProvider router={appRouter} />
      </div>
   
  )
}

export default App;

