import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import SignOut from './pages/SignOut'
import LandingPage from './pages/LandingPage'
import GetTutor from './pages/GetTutor'
import TutorForm from './pages/TutorForm'
import UserInfo from './pages/UserInfo'
import Profile from './pages/Profile'
import EditForm from './pages/EditForm'
import About from './pages/About'
import Requests from './pages/Requests'

export default function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/sign-out" element={<SignOut/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/get-tutor" element={<GetTutor/>}/>    
        <Route path="/tutor-form" element={<TutorForm/>}/>    
        <Route path="/tutors/:tutorId" element={<UserInfo/>}/>      
        <Route path="/profile" element={<Profile/>}/>    
        <Route path="/edit-form" element={<EditForm/>}> </Route>  
        <Route path="/about" element={<About/>}></Route> 
        <Route path="/requests" element={<Requests/>}></Route>
      </Routes>
  
    </BrowserRouter>
  )
}

