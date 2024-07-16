import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
function AddUser() {

  const userData = {
    firstName: "",
    age: "",
    email: "",
    password: ""
  }
  const[user, setUser] = useState(userData)

  const navigate = useNavigate();
  const handler = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]:value})
    // console.log(user);
    //Pass this data into the API
  }

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user) //****important****
    .then((response)=>{
        console.log(response);
        // toast.success("user created successfully", {position:"bottom-right"})
        alert("user register successfully")
        navigate("/")
    }).catch(error => console.log(error)) 
  }
  return (
    <div>
       <div className="flex justify-end">
      <Link className='bg-blue-400 text-white rounded p-2 mt-2 ml-5 mr-5 mb-5' to={"/"}>Back</Link>
    </div>
    <form className="max-w-sm mx-auto mt-10" onSubmit={submitForm}>
      <div className="mb-5">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" name="firstName" onChange={handler} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
        <input type="number" name="age" onChange={handler} id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="21" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name="email" onChange={handler} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" name="password" onChange={handler} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    </div>
  )
}

export default AddUser
