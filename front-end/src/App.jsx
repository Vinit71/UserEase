import './index.css'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './Components/User'
import AddUser from './Components/AddUser'
import EditUser from './Components/EditUser'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User/>
    },
    {
      path: "/register",
      element: <AddUser />
    },
    {
      path: "/update/:id",
      element: <EditUser />
    }
  ])

  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
