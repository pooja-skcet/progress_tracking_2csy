import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Layout = () => {
    const nav= useNavigate();
    const handleHome = () =>{
         nav('/Home')
    }
  return (
    <div>
    <h1>Layout page!!</h1>
    <Button onClick={handleHome}>For home click me!!</Button>
    </div>
  )
}

export default Layout