import React,{useState,useEffect} from 'react'
import SideBar from "./SideBar";
import AdminNavbar from "./AdminNavbar";
import PendingTable from "./ApplPending";
import axios from "axios";


function Applicationlist() {
const [applicationList,setApplicationList] = useState([])
const [modalData,setModalData] = useState();

useEffect(()=>{
   axios.get('http://localhost:8000/admin/application-list').then((res)=>{
      console.log('7777');
      setApplicationList(res.data.data)
  })
},[])
 const OnView = async (id)=>{

  const onUpdate = await axios.post('http://localhost:8000/admin/on-view',{id:id}).then((res)=>{ 
  })
 
    
 }
console.log(applicationList,'0000');
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
     applicationList.map((element)=>{
     {return !element.view?<tr>
        <td class="border border-slate-300 h-10 ...">{element.name}</td>
        <td class="border border-slate-300 ...">{element.companyName}</td>
        <td class="border border-slate-300 ...">{element.address}</td>
        <td class="border border-slate-300 ...">{element.email}</td>
        <td class="border border-slate-300 ...">
        <button
        className="bg-blue-500 hover:bg-blue-700 h-7  text-white font-bold py-0 px-4 border border-blue-700 rounded"
        type="button"
        onClick={() =>{
        setModalData(element)
        OnView(element._id)
        }}>
        View
      </button></td>
    </tr>:null }
     })
    }
  </tbody>
 </table>
</div>
<h1 className="float-left ml-80 mt-4 text-3xl font-semibold mt-7">Pending Applications</h1>
<div className="pt-20">
      <PendingTable application={applicationList}/>
 {modalData ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Details
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <table class="border-collapse w-96 border border-slate-400 ..." style={{width:"40rem"}}>
  <thead>
    <tr>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 font-semibold ...">Name</td>
      <td class="border border-slate-300 ...">{modalData.name}</td>
    </tr>
    <tr>
      <td class="border border-slate-300 font-semibold ...">companyName</td>
      <td class="border border-slate-300 ...">{modalData.companyName}</td>
    </tr>
    <tr>
      <td class="border border-slate-300 font-semibold ...">address</td>
      <td class="border border-slate-300 ...">{modalData.address}</td>
    </tr>
    <tr>
      <td class="border border-slate-300 font-semibold ...">email</td>
      <td class="border border-slate-300 ...">{modalData.email}</td>
    </tr>
    <tr>
      <td class="border border-slate-300 font-semibold ...">phone</td>
      <td class="border border-slate-300 ...">{modalData.phone}</td>
    </tr>
    <tr>
      <td class="border border-slate-300 font-semibold ...">state</td>
      <td class="border border-slate-300 ...">{modalData.state}</td>
    </tr>
  </tbody>
</table>
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                
                  <button
                    className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{setModalData()
                      window.location.reload();    
                     }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</div>
    </div>
    </>
  )
}

export default Applicationlist

