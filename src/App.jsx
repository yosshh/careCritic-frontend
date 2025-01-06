import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import FeatureSection from "./components/FeatureSection";
// import HeroSection from "./components/HeroSection";
// import HospitalsList from "./components/HospitalsList"
// import Navbar from "./components/Navbar";
// import Testimonials from "./components/Testimonials";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Profile from "./components/UserProfile";


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


// // import Navbar from './components/shared/Navbar'
// import Login from './components/auth/Login'
// import Signup from './components/auth/Signup'
// import Home from './components/Home'
// import Jobs from './components/Jobs'
// import Browse from './components/Browse'
// import Profile from './components/Profile'
// import JobDescription from './components/JobDescription'
// import Companies from './components/admin/Companies'
// import CreateCompany from './components/admin/CreateCompany'
// import CompanySetup from './components/admin/companySetup'
// import AdminJobs from './components/admin/AdminJobs'
// import PostJob from './components/admin/PostJob'
// import Applicants from './components/admin/Applicants'




// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/register',
//     element: <Signup />
//   },{
//     path: '/jobs',
//     element: <Jobs />
//   },{
//     path: "/description/:id",
//     element: <JobDescription />
//   },{
//     path: "/browse",
//     element: <Browse />
//   },{
//     path: "/profile",
//     element: <Profile />
//   },

// // Admin
//   {
//     path:"/admin/companies",
//     element: <Companies/>
//   },
//   {
//     path:"/admin/companies/create",
//     element: <CreateCompany/>
//   },
//   {
//     path:"/admin/companies/:id",
//     element: <CompanySetup />
//   },
//   {
//     path:"/admin/jobs/",
//     element: <AdminJobs />
//   },
//   {
//     path:"/admin/jobs/create",
//     element: <PostJob />
//   },
//   {
//     path:"/admin/jobs/:id/applicants",
//     element: <Applicants />
//   },
// ])
// function App() {

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   )
// }

// export default App
