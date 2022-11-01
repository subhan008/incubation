import React from 'react'
import axios from "axios";

function ApplPending({application}) {
    console.log(application,'+++');
  const  onProceed = (id)=>{
      axios.post("http://localhost:8000/admin/change-status",{id:id}).then(()=>{
          window.location.reload()
      })
  }
  return (
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
        console.log();
     { return element.view && !element.status? <tr>
          <td class="border border-slate-300 h-10 ...">{element.name}</td>
          <td class="border border-slate-300 ...">{element.companyName}</td>
          <td class="border border-slate-300 ...">{element.address}</td>
          <td class="border border-slate-300 ...">{element.email}</td>
          <td class="border border-slate-300 ...">
          <button   
          onClick={()=>onProceed(element._id)}
          className="bg-blue-500 hover:bg-blue-700 h-7  text-white font-bold py-0 px-4 border border-blue-700 rounded"
          type="button">  
          Proceed
        </button>
            </td>
      </tr>:null }
       })
      }
    </tbody>
   </table>
  )
}

export default ApplPending
