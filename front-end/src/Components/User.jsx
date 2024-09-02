import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
function User() {

  const[user, setUser] = useState([])

  useEffect(()=>{
    const getData = async () =>{
     const response = await axios.get("http://localhost:8000/api/fetchAll")
     console.log(response);
     
     setUser(response.data)
    }

    getData();
  },[])

  const deleteUser = async(userId) => {
    await axios.delete(`http://localhost:8000/api/deleteUser/${userId}`)
    .then((response)=>{
      setUser((prevUser)=> prevUser.filter((user)=>user._id !==userId))
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const filterAge = () =>{
    const filtered = user.filter((res) => res.age > 20);
   setUser(filtered);
  }

  return (
    <div>
     <Navbar />

    <div className='flex  justify-end'>
      <Link to={"/register"} className='bg-blue-600 rounded p-1.5 mr-5 text-white mb-2'>Add User</Link>
    </div>
    
    {/* filtered result */}
    <button
  className='bg-blue-300 text-black border border-black rounded-lg p-1 hover:bg-blue-400 mb-2 ml-1'
  onClick={filterAge}
>
  Age 20 and above
</button>

      {/* table */}
<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full table-fixed divide-y divide-gray-200 border border-gray-600">
          <thead>
          <tr>
      <th scope="col" className="w-1/12 px-6 py-3 text-start text-md font-medium text-gray-800 uppercase">S.No</th>
      <th scope="col" className="w-3/12 px-6 py-3 text-start text-md font-medium text-gray-800 uppercase">Name</th>
      <th scope="col" className="w-2/12 px-6 py-3 text-start text-md font-medium text-gray-800 uppercase">Age</th>
      <th scope="col" className="w-4/12 px-6 py-3 text-start text-md font-medium text-gray-800 uppercase">Email</th>
      <th scope="col" className="w-1/12 px-6 py-3 text-end text-md font-medium text-gray-800 uppercase">Actions</th>
    </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

          {
           user.map((person, index) => {
            return(
            <tr key={person._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index+1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{person.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{person.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{person.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button onClick={()=>deleteUser(person._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
              <Link to={`/update/`+person._id}><button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ml-5">Edit</button></Link>
              </td>
            </tr>
            )
           })
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default User
