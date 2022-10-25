import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Camponents/User/Login";
import Signup from "./Camponents/User/Signup";

import {BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route >
          <Route path='/' element={<Home/>}/>
        </Route> 

        <Route >
        <Route path='/login' element={<Login/>}/>
        </Route>

        <Route >
          <Route path='/signup' element={<Signup/>}/>
        </Route>

        <Route >
          <Route path='/admin' element={<Dashboard/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
