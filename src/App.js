import logo from './logo.svg';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashBoard from './pages/UserDashBoard';
import Privateroute from './components/Privateroute';
import Profileinfo from './pages/Profileinfo';
import LoginComponent from './components/login.component';
import Trail from './components/trail';
import AddPost from './components/AddPost';


function App() {
  return (
    <div>
   <ToastContainer position='bottom-center'/>
   <Routes>
    <Route path='home' element="<h1>this is fs</h1>"> </Route>
    <Route path='/login' element={<LoginComponent/> }/>
    <Route path='/signup' element={<Signup/> }/>
    
    <Route path="/trail" element={<Trail/>} />
    <Route path='/addPost' element={<AddPost/>}/>
    <Route path='/about' element={<About/> }/>
    <Route path='/user' element={<Privateroute/> }>
    <Route path='dashboard' element={<UserDashBoard/> }/>
    <Route path='profile' element={<Profileinfo/> }/>

    </Route>
   </Routes>
   </div>
  );
}

export default App;
