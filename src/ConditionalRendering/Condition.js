import React,{ useState } from 'react'
import Signup from '../Signup.js'
import LoginPage from '../LoginPage.js'
const Condition = () => {
    const [ state , setState ] = useState({isLogged:false});
  return (
   state.isLogged ? <Signup/> : <LoginPage/>
  )
};

export default Condition