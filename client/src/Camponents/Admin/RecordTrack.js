import React,{useEffect,useState,useContext} from 'react'
import SideBar from "./SideBar";
import AdminNavbar from "./AdminNavbar";
import {ApplContext} from "../../Store/applContext";
import axios from "axios";
function RecordTrack() {
 
  const {setApplData,applData} = useContext(ApplContext)
const [application,setApplication] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8000/admin/application-list').then((res)=>{
       setApplication(res.data.data)
       setApplData(res.data.data)
   })
 },[])
    
 console.log(application,"0000");
 const onAllowcate = (id)=>{
    axios.post("http://localhost:8000/admin/slot-allowcate",{companyId:id,timeStamp:new Date()}).then(()=>{
      window.location.reload()  
    })
 }
 console.log(applData,'++++');   
  return (
    <>    
    <SideBar />
    <AdminNavbar />
    <div>
      <h1 className="float-left ml-80 mt-4 text-3xl font-semibold">Application List</h1>
      <div className="pt-20">
      <table class="border-collapse border border-slate-400 w-9/12 ml-72 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">Name</th>
      <th class="border border-slate-300 ...">Company Name</th>
      <th class="border border-slate-300 ...">Address</th>
      <th class="border border-slate-300 ...">Email</th>
      <th class="border border-slate-300 ...">....</th> 
    </tr>
  </thead>
  <tbody>
    {
      application.map((element)=>{
      {return element.status=="proceeded" ? <tr>
        <td class="border border-slate-300 h-10 ...">{element.name}</td>
        <td class="border border-slate-300 ...">{element.companyName}</td>
        <td class="border border-slate-300 ...">{element.address}</td>
        <td class="border border-slate-300 ...">{element.email}</td>
        <td class="border border-slate-300 ...">
        <button
        className="bg-blue-500 hover:bg-blue-700 h-7  text-white font-bold py-0 px-4 border border-blue-700 rounded"
        type="button"
        onClick={()=>onAllowcate(element._id)}> 
        Allowcate     
      </button></td>
    </tr>  : null
      }
      })
  
    }
     </tbody>
   </table>
  </div>
</div>
    </>
    
  )
}

export default RecordTrack
