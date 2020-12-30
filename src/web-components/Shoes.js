import { connect } from 'react-redux';
import '../CSS/home.css';
import { setPage } from "../redux/actions/pageNumber";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import react, { useState } from 'react';



const Shoes = ({ dispatch, page_number }) => {
  let [redirect, setRidirect] = useState(false);
  // geturl
  const getUrl = () => {
    let paremeter = new URLSearchParams(window.location.search);
    let currentPage = parseInt(paremeter.get("page"), 10);
    dispatch(setPage(currentPage));
    console.log(page_number);
  }
  react.useEffect(() => getUrl(), [])

  const next = () => {
    dispatch(setPage(page_number + 1));
    // setRidirect(true);
    let link = `/shoes?page=${page_number}`.replace(/\s/g, '');
    // this.props.history.push(link);
    let prev = document.getElementById("pre-bot");
    prev.className = "show-div";
    return link;
  }
  const previews = () => {
    if (page_number - 1 >= 0) {
      dispatch(setPage(page_number - 1));
      let link = `/shoes?page=${page_number}`.replace(/\s/g, '');
      // this.props.history.push(link);
      if (page_number === 1) {
        let prev = document.getElementById("pre-bot");
        prev.className = "hidden-div";
      }
    }



    return 0;
  }

  if (redirect) {
    let link = `/shoes?page=${page_number}`.replace(/\s/g, '');
    return <Redirect to={{
      pathname: "/shoes",
      search: `?page=${page_number}`,
      setPage: { referrece: getUrl() }
    }}></Redirect>;
  }


  return (
    <div >
      <h1 className="test">Shoes page {page_number}</h1>
      <Link id="pre-bot" to={`/shoes?page=${page_number - 1}`} className="hidden-div"><button onClick={previews}>Previews</button></Link>
      <Link to={`/shoes?page=${page_number + 1}`}><button onClick={next} >Next</button></Link>

    </div>
  );
}
const mapStateToProps = state => ({
  page_number: state.pageReducer.page_number
});
export default connect(mapStateToProps)(Shoes);
