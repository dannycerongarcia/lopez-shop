import { connect } from 'react-redux';
import '../CSS/home.css';
import { setPage } from "../redux/actions/pageNumber";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import react, { useState, useEffect } from 'react';



const Shoes = ({ dispatch, page_number }) => {
  // geturl
  var shoes_link = `/shoes?page=${page_number}`.replace(/\s/g, '');

  const getUrl = () => {
    let paremeter = new URLSearchParams(window.location.search);
    let currentPage = paremeter.get("page");
    console.log("current page_ "+currentPage);
  }
  react.useEffect(() => getUrl(), [])

  const next = () => {
    dispatch(setPage(page_number + 1));
    let link = `/shoes?page=${page_number}`.replace(/\s/g, '');
    return(<Redirect push to={link}/>);
  }
  const previews = () => {
    if (page_number - 1 >= 0) {
      dispatch(setPage(page_number - 1));
      let link = `/shoes?page=${page_number}`.replace(/\s/g, '');
      return(<Redirect push to={link}/>);
    }
  }


  return (
    <div className="">
      <h1 className="test">Shoes page {page_number}</h1>
      <button onClick={previews} >Previews</button>
      <button onClick={next}>Next</button>

    </div>
  );
}
const mapStateToProps = state => ({
  page_number: state.pageReducer.page_number
});
export default connect(mapStateToProps)(Shoes);
