import React from "react";
import { Route, Routes,BrowserRouter} from 'react-router-dom'
import Menu from '../companent/Menu'
import Login from '../pages/Login'

export default function App() {
  return (
          
    <BrowserRouter>
    
    <Routes >  
    <Route path="/" element={<Login />} />
    <Route path="/Menu" element={<Menu/>}/>     
    </Routes>
  </BrowserRouter>
  
    
  );
  
}



