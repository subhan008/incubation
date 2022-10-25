import {useState,createContext} from 'react'

export const AuthContext = createContext();

export default function Context({children}) {
    const [user,setUser] = useState()
    console.log(user,'okoko');
  return (
   <AuthContext.Provider value={{user,setUser}}>
       {children}
   </AuthContext.Provider>
  )
}

