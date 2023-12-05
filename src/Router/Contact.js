import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const nav= useNavigate();
    const handleHome = () =>{
         nav('/Home')
    }
  return (
    <div>
    <h1>Contact page!</h1>
    <button onClick={handleHome}>Click to home</button></div>
   
  )
}

export default Contact