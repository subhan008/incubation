import React,{useState,useEffect,useContext} from 'react'
import SideBar from "./SideBar";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

function BookingSlot() {
  const [slots,setSlots] = useState([])
  const [modalData,setModalData] = useState()
  const [modalData2,setModalData2] = useState()
  const [slotAllowcate,setSlotAllowcate] = useState()
  console.log(slotAllowcate,'eeerrr');
  useEffect(()=>{
   axios.get('http://localhost:8000/admin/slots').then((res)=>{
    setSlots(res.data.slotData)
   })
  },[])

  const handleModal = (companyId)=>{
      axios.get(`http://localhost:8000/admin/getApplData/${companyId}`).then((res)=>{
        console.log(res.data.applDetails,'qqq');
        setModalData(res.data.applDetails)
      })
  }
  const handleModal2 = (slotNumber)=>{
    setSlotAllowcate({slotNumber:slotNumber})
    axios.get(`http://localhost:8000/admin/application-list`).then((res)=>{  
      setModalData2(res.data.data)
    })
}
const handleChange = (e)=>{
  setSlotAllowcate({...slotAllowcate,id:e.target.value})
}
function onSave() {
   axios.post("http://localhost:8000/admin/specified-slotAllowcation",slotAllowcate).then((res)=>{
    console.log('yehhhjhhhhhhhhhhhhhhhhhhhhh kck');
    setModalData2()
    window.location.reload()
   })
}
  return (

    <>
    <SideBar />
    <AdminNavbar />
    <div className="ml-64 mt-10" >
   <div className='grid grid-cols-8  gap-y-5 pr-20 gap-x-7 bg-slate-50 mb-10 pl-36 '>
    {
      slots.map((element)=>{
        return  element.companyId?
          <div  className="bg-blue-400 w-24 min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid "
          onClick={()=>{handleModal(element.companyId)}}>
                </div> 
                :    
                <div  className="bg-amber-400  w-24 min-h-fit sm:h-11 md:h-14 lg:h-16 xl:h-20  drop-shadow-lg grid "
                onClick={()=>{handleModal2(element.slotNumber)}}>
            </div>                        
      })
            
    }       
    </div>

      {  modalData ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   Company Details
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

{  modalData2 ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Proceeded Companies
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div class="" style={{width:"40rem"}}>
 
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Company</label>
<select onChange={handleChange} id="companies" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option >Choose a company</option>
  {
    
    modalData2.map((element)=>{
      return element.status == 'proceeded'?
  <option value={element._id} >{element.companyName}</option>
      :null
    })
   
  }
</select>
</div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {slotAllowcate &&
                    <button
                    className="bg-green-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onSave}>
                    Save
                  </button>
                  }
                  <button
                    className="bg-red-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{setModalData2() }}>
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
    </>
  )
}

export default BookingSlot
