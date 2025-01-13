import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hospitals from './components/Hospitals';
import Doctors from './components/Doctors'
import HospitalDescription from './components/HospitalDescription';
import UserProfile from './components/UserProfile'
import DoctorProfile from './components/DoctorProfile';


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
    element: <UserProfile />
  },
  {
    path: '/doctorProfile',
    element: <DoctorProfile />
  },
  {
    path: '/userProfile',
    element: <UserProfile />
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

