import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Signup() {   
 
const navigate = useNavigate()

const [signup,setSignup] = useState({})
const [emailErr,setEmailErr] = useState('')

const handleChange = (e)=>{
  
  setSignup({ ...signup, [e.target.name]: e.target.value })
}
console.log(signup);

  const handleSubmit = (e)=>{
  e.preventDefault()

     axios.post('http://localhost:8000/signup',signup)
     .then((res)=>{
      console.log(res.data,'111');
      if(res.status == 409){
       setEmailErr('Email already exist')
        navigate('/signup')   
      }
      else{
          navigate('/login')   
      }
        })       
  }

  return (
    <section className="h-full w-full flex   justify-center">
    <form class="w-full max-w-lg mt-32">
        <h1 className="mb-10 font-normal text-slate-500 text-4xl">Signup</h1>
  <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="fname" 
      onChange={handleChange}  type="text" placeholder="Jane"/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lname" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="email" type="text" placeholder="@gmail.com"/>
      <p class="text-red-500 text-xs italic">{emailErr}</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone Number
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="mobile" id="grid-last-name" type="text" placeholder="Number"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap justify-center -mx-3 mb-2">
     <button type="submit" className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-2/4"
     onClick={handleSubmit} >Submit</button>
    {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}
  </div>
</form>
</section>
  )
}

export default Signup
