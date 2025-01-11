import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hospitals from './components/Hospitals';
import Doctors from './components/Doctors'
import Profile from './components/UserProfile';
import HospitalDescription from './components/HospitalDescription';


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
  },
  {
    path: '/description/:id',
    element: <HospitalDescription />
  },
  {
    path: '/doctors',
    element: <Doctors />
  },
  {
    path: '/userProfile',
    element: <Profile />
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

