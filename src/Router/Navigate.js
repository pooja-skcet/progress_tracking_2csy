import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Contact from './Contact'
import Blog from './Blog'
const Navigate = () =>
{
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Layout' element={<Layout/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigate;