import {useContext} from 'react'
import {useNavigate} from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate()
const localAdmin = localStorage.getItem("admin")

// if (localAdmin!==null && admin === undefined) {
// }
const admin = 1

    const handleLogout = ()=>{
        localStorage.removeItem("admin")  
        navigate('/admin/login') 
    }
     
  return (
    <nav className=" p-6 bg-slate-200 h-20">
    <h2 className="float-left text-4xl font-semibold ml-4">Glaiz</h2>
    { admin && <button onClick={handleLogout} class="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Logout
      </button>
    }
  { admin? <h1 className="float-right mr-20 text-2xl font-light"></h1>  : 
  <button className="float-right" onClick={()=>navigate('/login')}><h1  className=" mr-10 text-2xl font-light">Login</h1></button>  
  }
  </nav>
  )
}

export default AdminNavbar
