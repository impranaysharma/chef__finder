
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing'
import Navbar from './components/Navbar';
  import Login from './Pages/Login';
import Profile from './Pages/Profile'
import AfterLogin from './Pages/AfterLogin';
import Form2 from './Pages/Form2';
import Signup from './Pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="chef_finder" element={<Landing/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="form2" element={<Form2/>} />
        <Route path="*" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
