import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: "Home"
    },
    {
      path: "/register",
      element: "user registeration"
    },
    {
      path: "/update",
      element: "user update"
    }
  ])

  return (
    <>
     <h1>Hello</h1>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
