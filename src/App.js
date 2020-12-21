import logo from './logo.svg';
import './App.css';
// importing router from reactrouter.com for loading componenets
import {Switch,Route,Link,Redirect} from 'react-router-dom';
// importing redux
import {connect} from 'react-redux';
// components
import Home from './web-components/Home.js';
import Shoes from './web-components/Shoes.js';

function App() {

  return (
    <div className="">
      <div className="topnav">
      <header className="">
        <Link to="/" className="item active"><div >Logo</div></Link>
        <div className="item icon"><i class="fa fa-bars"></i></div>
        
        {/* <i class="fa fafa-bars"></i> */}
        <br/>


        <Link to="/" className="item"><div >Home</div></Link>
        <Link to="/shoes"className="item"><div >Shoes</div></Link>
        
      </header>
      </div>
      
      <switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Shoes" component={Shoes}></Route>
        </switch>
    </div>
  );
}

export default App;
