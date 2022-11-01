import React from 'react'
import {useNavigate} from "react-router-dom";

function home() {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  const handleOnClick = ()=>{
    if (user) {
      navigate('/slotbooking')
    }
    else navigate('/login') 
  }
  
  return (
    <section className="h-full">
    <div className="flex justify-center mt-32">
      <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIsWymz4r0valZKI8OG9Ma_1NbGTd14abSg&usqp=CAU" alt="" />
      <img className="inline-block animate-bounce ease duration-300 bg-black mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r5aEwBVBsp-r4L5bgqHuH7UKGNZTX_QgTA&usqp=CAU" alt="" />
    </div>
    <a className="text-2xl underline " href="" onClick={handleOnClick}>Register</a>
     </section>
  )
}
  
export default home
