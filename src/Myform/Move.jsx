import React from 'react'
import { Route, Routes } from "react-router-dom"
// import Array from './Array';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import './Home.css'

function Move() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();


    }
  return (
    <>

<h2>Home Page</h2>

    
    <div id='Home'>
        {/* <Routes>
        <Route path="/Array" element={<Array/>} />
        </Routes>
       
      

        <ul>
            <a href="/Array"> Click Here </a>
       
        </ul> */}



        


    </div>
    <button  className='btn1' onClick={handleClick}>Logout</button>
    </>
    
  )
}

export default Move;
