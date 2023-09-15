import React from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>            
        </Routes>
    </BrowserRouter>
  );
}

export default App;
