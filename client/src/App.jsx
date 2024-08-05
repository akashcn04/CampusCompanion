import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import SignOut from './pages/SignOut'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/sign-out" element={<SignOut/>}/>
        <Route path="/landing-page" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
