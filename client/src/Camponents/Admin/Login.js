import React,{useState,useContext,useEffect} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate()
  const [invalid,setInavlid] = useState()  
  const [login,setLogin] = useState({})

  const token = localStorage.getItem("admin")
  useEffect(()=>{
    if(token){
      navigate('/admin')
    }
  },[])

  const handleChange = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }   

  const handleSubmit = (e)=>{
    e.preventDefault(e) 
    axios.post('http://localhost:8000/admin/admin-login',login).then((res)=>{
       if(res.data.admin){
        localStorage.setItem("Admintoken", res.data.token)
        localStorage.setItem("admin",login)  
        navigate('/admin')   
       }
       if(!res.data.admin){
        setInavlid(res.data.message)
        console.log(invalid,'ds');
        navigate('/admin/login')
       }
    })
  }
  return (
    <section class="flex h-screen bg-indigo-700">
    <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
      <header>
        <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>   
      { invalid &&  
      <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
   {invalid} <a href="#" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
  </div>
  <button   onClick={()=>setInavlid()}
 type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
      }
      <form>
        <div>
          <label class="block mb-2 text-indigo-500" for="username">Name</label>
          <input onChange={handleChange} required class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="name"/>
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input onChange={handleChange} required class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password"/>
        </div>
        <div>          
          <input onClick={handleSubmit} class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit"/>
        </div>       
      </form>  
    </div>
    </section>
  )
}

export default AdminLogin
