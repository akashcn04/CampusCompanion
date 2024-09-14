import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import SignOut from './pages/SignOut'
import LandingPage from './pages/LandingPage'
import GetTutor from './pages/GetTutor'
import TutorForm from './pages/TutorForm'
import UserInfo from './pages/UserInfo'

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
      </Routes>
  
    </BrowserRouter>
  )
}

