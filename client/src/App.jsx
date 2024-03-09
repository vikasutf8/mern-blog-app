import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home" 
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Headers from "./components/Header"
import Footers from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>
      
    </Routes>  
    <Footers/>
    </BrowserRouter>

  )
}
