import React from 'react'
import {useNavigate} from "react-router-dom";

function SideBar() {
  const navigate = useNavigate()
  return (
      <div class="w-60 h-full shadow-md bg-black px-1 absolute">
        <div class="h-32 flex items-center justify-center ">
        <h1 className="text-slate-50 text-5xl font-semibold">Glaiz</h1>
        </div>
  <ul class="relative">
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="" data-mdb-ripple="true" data-mdb-ripple-color="dark"
       onClick={()=>navigate('/admin')}   
      >Application List</a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="" data-mdb-ripple="true" data-mdb-ripple-color="dark"
       onClick={()=>navigate('/record-track')}
        >Record Track
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-50 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="" data-mdb-ripple="true" data-mdb-ripple-color="dark"
      onClick={()=>navigate('/booking-slot')}
      >Booking SLot</a>
    </li>
  </ul>
</div>
  )
}

export default SideBar


