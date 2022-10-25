import {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Store/Context";

function Header() {
  const {user,setUser} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const localUser = JSON.parse( localStorage.getItem('user'))
  console.log(user,'aaaa');
  if(user === undefined && localStorage!==null){
    console.log('aaaakkkk');
    setUser(localUser)  
  }
  const handleLogout = ()=>{
    setUser()
     localStorage.removeItem("user")
     navigate('/')
  }
  return ( 
      <nav className=" p-6 bg-slate-200 h-20">
        <h2 className="float-left text-4xl font-semibold 	ml-4">Glaiz</h2>
        { user && <button onClick={handleLogout} class="float-right bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Logout
          </button>
        }
      { user? <h1 className="float-right mr-20 text-2xl font-light">Welcome {user.fname}</h1>  : 
      <button className="float-right" onClick={()=>navigate('/login')}><h1  className=" mr-10 text-2xl font-light">Login</h1></button>  
      }
       
       
      </nav>
    
  )
}

export default Header
