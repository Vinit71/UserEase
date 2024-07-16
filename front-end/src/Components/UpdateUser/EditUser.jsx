import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
function EditUser() {
  const navigate = useNavigate();
  const userData = {
    firstName: "",
    age: "",
    email: "",
    password: ""
  }

  const {id} = useParams();
  const[user, setUser] = useState(userData)

  const handler = (e) =>{

    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/fetchOne/${id}`)
      .then((response)=>{
        // console.log(response);
        setUser(response.data)
      }).catch((error)=> console.log(error))
    },[id]
  )

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/updateDetails/${id}`,user)
    .then((response)=>{
      alert("user Updated successfully")
        navigate("/")
    }).catch(error => console.log(error))
  }
  return (
    <div>
      <h1>Lets edit..</h1>
      <Link className='bg-red-400 mt-2 ml-5' to={"/"}>Back</Link>
    <form className="max-w-sm mx-auto mt-10" onSubmit={submitForm}>
      <h2>Update User</h2>
      <div className="mb-5">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" name='firstName' onChange={handler} value={user.firstName} id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required />
      </div>
      <div className="mb-5">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
        <input type="number" name='age' onChange={handler} value={user.age} id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name='email' onChange={handler} value={user.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <button type="submit" name='submit' onChange={handler} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Done</button>
    </form>
    </div>
  )
}

export default EditUser
