
import '../App.css';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Map from '../components/map';
import Pos from '../components/Pos';
import Solution from '../components/Solution';
import Welcome from '../components/Welcome';
import Cardhover from '../components/Cardhover';
import Trust from '../components/Trust';
import Form from '../components/Form';
import Outlet from '../components/Outlet';
import Login from '../components/Login';
import Profile from './Profile';






function App() {
  return (
    <div className="App">
      
    
      <Welcome/>
      <Home/>
      <Trust/>
      <Form/>
      
      <Testimonials/>
      <Outlet/>
      <Solution/>
      <Pos/>
      <Map/>

      <Cardhover/>
      <Footer/>
     
      
      
    </div>
  );
}

export default App;
