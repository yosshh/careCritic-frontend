import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Hospitals from './components/Hospitals';
import Doctors from './components/Doctors'
import HospitalDescription from './components/HospitalDescription';
import UserProfile from './components/UserProfile'
import DoctorProfile from './components/DoctorProfile';
import DoctorCard from './components/DoctorCard';
import HospitalReview from './components/HospitalReview';
import DoctorReview from './components/DoctorReview';
import HospitalProfile from './components/HospitalProfile';


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
    path: '/description/hospital/:id',
    element: <HospitalDescription />
  },
  {
    path: '/description/doctor/:id',
    element: <DoctorCard />
  },
  {
    path: '/reviews/hospital/:id',
    element: <HospitalReview />
  },
  {
    path: '/reviews/doctor/:id',
    element: <DoctorReview />
  },
  {
    path: '/doctors',
    element: <Doctors />
  },
  {
    path: '/hospitalProfile',
    element: <HospitalProfile />
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

