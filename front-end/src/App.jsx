import './index.css'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './Components/GetUser/User'
import AddUser from './Components/RegisterUser/AddUser'
import EditUser from './Components/UpdateUser/EditUser'
import {Toaster, toast} from 'react-hot-toast'

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
     {/* <h1>Hello</h1> */}
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
