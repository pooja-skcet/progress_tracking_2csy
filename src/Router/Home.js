import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate= useNavigate();
    const handleBlog = () =>
    {
        navigate('/Blog')
    }
    const handleLayout = ()=>{
        navigate('/Layout')
    }
    const handleContact = () =>{
        navigate('/Contact')
    }
  return (
    <div>
    
    <Button variant="text" onClick={handleLayout}>Layout</Button>
<Button variant="contained" onClick={handleBlog}>Blog</Button>
<Button variant="outlined" onClick={handleContact}>Contact</Button></div>
  )
}

export default Home