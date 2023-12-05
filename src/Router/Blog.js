import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
    const nav= useNavigate();
    const handleHome = () =>{
         nav('/Home')
    }
  return (
    <div>
    <h1>Blog Page</h1>
    <Button onClick={handleHome}>Click me!</Button></div>
  )
}

export default Blog