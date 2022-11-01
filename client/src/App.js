import Home from "./Pages/Home";
import ApplicationList from "./Camponents/Admin/Application-list";
import Login from "./Camponents/User/Login";
import Signup from "./Camponents/User/Signup";
import Application from "./Camponents/User/Application";
import AdminLogin from "./Camponents/Admin/Login";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import RecordTrack from "./Camponents/Admin/RecordTrack";
import BookingSlot from "./Camponents/Admin/BookingSlot";

import PrivateRoute from "./Camponents/PrivateRoute";
import './App.css';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/login' element={<Login/>}/>
        
        <Route path='/signup' element={<Signup/>}/>
        
        <Route path='/slotbooking' element={<Application/>}/> 
    
        <Route path="/admin/login" element={ <AdminLogin /> } />
        <Route element={ <PrivateRoute/> }>
          <Route path='/admin' element={<ApplicationList/>}/>  
           <Route path='/record-track' element={<RecordTrack/> }/>
           <Route path='/booking-slot' element={<BookingSlot/> }/>
  
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
