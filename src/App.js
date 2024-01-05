import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Pgaes/Home';
import Project from './Pgaes/Project';
import Education from './Pgaes/Education';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
   <div className="main">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/edu" element={<Education></Education>}></Route>
      </Routes>
    <Footer></Footer>  
    </Router>
   </div>
  );
}

export default App;
