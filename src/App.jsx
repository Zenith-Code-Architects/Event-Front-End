import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from "./pages/landing";
import AllEvents from './pages/all-events';
import AdminDashboard from './pages/admin-dashboard';
import EventCreation from './pages/event-creation';

function App() {
  const router = createBrowserRouter([
    {path:"/", element:<LandingPage/>},
    {path:"all-events", element:<AllEvents/>},
    {path:"admin-dashboard", element:<AdminDashboard/>},
    {path:"event-creation", element:<EventCreation/>}

  ])

  return <RouterProvider router={router}/>
}

export default App
