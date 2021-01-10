// import logo from './logo.svg';
import logo from './logo191-white.png';
import './App.css';

import react, { useState, useEffect } from 'react';
// importing router from reactrouter.com for loading componenets
import { Switch, Route, Link, Redirect } from 'react-router-dom';
// importing redux
import { connect } from 'react-redux';
// components
import Home from './web-components/Home.js';
import Shoes from './web-components/Shoes.js';
// redux
import { setPage } from "./redux/actions/pageNumber";


const App = ({ dispatch, page_number }) => {

  // search input
  let [mySearch, setSearch] = useState('');
  // need to create 

  // drop down menu
  const dropMenu = () => {
    var x = document.getElementById("myTopNav");
    var y = document.getElementById("searchBar");
    var z = document.getElementById("inputB");
    if (x.className === "topnav" && y.className === "searchBar") {
      x.className += " responsive";
      y.className += " responsive";
      z.className += " responsive";
    } else {
      x.className = "topnav";
      y.className = "searchBar";
      z.className += "search-buttom";
    }
  }

  // search bar
  const search = () => {
    console.log(mySearch);
  }


  return (
    <div className="">
      <div className="topnav" id="myTopNav">
        <header className="">
          <Link to="/" className="item active">
            <img className="App-logo-l" src={logo} />
          </Link>
          <input id="searchBar" placeholder="Buscar" className="searchBar" onChange={e => setSearch(e.target.value)}></input>
          <button id="inputB" className="search-buttom" onClick={search}><i class="fa fa-search"></i></button>

          <div className="item icon" onClick={dropMenu}><i class="fa fa-bars"></i></div>

          <br />

          <Link to="/" className="item" onClick={dropMenu}><div >Home</div></Link>

          <Link to={`/shoes?page=0`} className="item" onClick={function(event){dropMenu(); dispatch(setPage(0));} }><div >Shoes</div></Link>

        </header>
      </div>

      <Switch>
        <Route path="/" exact >
          <Home/>
        </Route>
        <Route path={`/shoes`}>
          <Shoes/>
        </Route>
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  page_number: state.pageReducer.page_number,
});
export default connect(mapStateToProps)(App);
