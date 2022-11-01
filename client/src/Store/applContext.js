import {useState,createContext} from 'react'

export const ApplContext = createContext();

export default function Context({children}) {
    const [applData,setApplData] = useState()
    console.log(applData,'222');
  return (
   <ApplContext.Provider value={{applData,setApplData}}>
       {children}
   </ApplContext.Provider>
  )
}

 
