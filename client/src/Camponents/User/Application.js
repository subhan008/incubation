import React,{useState} from 'react'
import Header from "../Header";   
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Application() {
    const navigate = useNavigate()
    const formValues = {
        name: "",
        address: "",
        city: "",
        state: "",
        email: "",
        phone: "",
        companyName: "",
        DescribeYourTeamAndBackground: "",
        DescribeYourCompanyAndProducts: "",
        DescribeTheProblem: "",
        WhatsUniqe: "",
    }
const user = localStorage.getItem('user')
console.log(user,'lll');
const [formData,setFormData] = useState(formValues);   
if(!user){
    navigate('/login')
}
console.log(formData,'888');
const handleChange = (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})  
}

const onSubmit = (e)=>{
    e.preventDefault()

   axios.post('http://localhost:8000/slotbooking',formData).then((res)=>{
    console.log(res);
    console.log('form Submited succesfully');
      navigate('/')
   })
}


  return (
    <>
    <Header />
    <section className="h-full w-full flex   justify-center">
    <form class="w-full max-w-lg mt-32 pb-64">
        <h1 className="mb-10 font-normal text-slate-500 text-4xl">Signup</h1>
    <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="name" 
       type="text" placeholder=""/>  
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input onChange={handleChange}  required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Address
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="address" id="grid-password" type="text" placeholder="Address"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Company Name
      </label>
      <input onChange={handleChange}  required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="companyName" type="text" placeholder=""/>
      <p class="text-red-500 text-xs italic"></p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone Number
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="phone" id="grid-last-name" type="text" placeholder="Number"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        City Name
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="city" type="text" placeholder=""/>
      <p class="text-red-500 text-xs italic"></p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        State
      </label>
      <input onChange={handleChange} required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="state" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
 <div class="">
    <div class="w-full ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Describe Your Team And Background
      </label>
      <textarea name="DescribeYourTeamAndBackground" onChange={handleChange} style={{height:"100px"}} class="txt-area appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-2/5	 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
  <div class=" ">
    <div class="w-full ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
    Describe Your Company And Products      </label>
      <textarea onChange={handleChange} style={{height:"100px"}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-2/5	 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="DescribeYourCompanyAndProducts" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
  <div class="">
    <div class="w-full ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Describe The Problem
      </label>
      <textarea onChange={handleChange} style={{height:"100px"}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-2/5	 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="DescribeTheProblem" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
  <div class="">
    <div class="w-full">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      Whats Uniqe
      </label>
      <textarea onChange={handleChange} style={{height:"100px"}} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-2/5	 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="WhatsUniqe" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
  <div class="flex flex-wrap justify-center -mx-3 mb-2">
     <button type="submit" className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-2/4"
     onClick={onSubmit} >Submit</button>
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
</>
  )
}

export default Application
