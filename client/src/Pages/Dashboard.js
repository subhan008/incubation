import React from 'react'
import SideBar from "../Camponents/SideBar";
import Header from "../Camponents/Header";
import Applicationlist from "../Camponents/Admin/Application-list";
function Dashboard() {
  return (
    <div>
     
      <SideBar />
      <Header />
      <Applicationlist />
      
    </div>
  )
}

export default Dashboard
