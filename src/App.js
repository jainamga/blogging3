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
import Home from './pages/Home';
import NewFeed from './components/NewFeed';
import CardComponent from './components/Test3';
import Post from './components/Post';
import PostPage from './pages/PostPage';
import PostPage2 from './pages/PostPage copy';


function App() {
  return (
    <div>
   <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/blogging' element={<LoginComponent/> }/>
    <Route path='/home' element={<Home/> }/> 
    <Route path='/login' element={<LoginComponent/> }/>
    <Route path='/signup' element={<Signup/> }/>
    <Route path='/test3' element={<CardComponent/>}/>
    
    <Route path='/post/:postId' element={<PostPage/>}/>
    <Route path='/post2/:postId' element={<PostPage2/>}/>

    <Route path='/feed' element={<NewFeed/>}/>
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
