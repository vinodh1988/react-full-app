import './App.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = ()=>{
  return(
<Router>
  <div>
<div className="mt-4 p-5 bg-dark text-white rounded">
  <h1>React World</h1>
  <p>Simple app using react</p>

  <ul id="menulist">
       <li><Link to="/">Home</Link></li> 
       <li><Link to="/about">About us</Link></li>
       <li><Link to="/contact">Contact us</Link></li>
  </ul>
</div>
<div id="homearea">
  

   <Route path="/"  exact component={Home}></Route>
   <Route path="/about"  component={About}></Route>
   <Route path="/contact"  component={Contact}></Route>

</div>
  </div>
</Router>
  );
}

export default App