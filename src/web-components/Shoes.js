import { connect } from 'react-redux';
import '../CSS/home.css';
import { setPage, getItems, setItems } from "../redux/actions/pageNumber";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import react, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';



const Shoes = ({ dispatch, page_number, items }) => {

  const [itemList, setItemsList] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [maxPages,setMaxPages] = useState(0);
  const history = useHistory();
  const handleOnClick = useCallback((n) => history.push(`/shoes?page=${n}`), [history]);

  const getUrl = () => {
    let paremeter = new URLSearchParams(window.location.search);
    let currentPage = parseInt(paremeter.get("page"), 10);
    if (currentPage >= 0) {
      // update redux pege count
      dispatch(setPage(currentPage));
      // update local state pagecount
      setpageCount(currentPage);
    }
    if (currentPage > 0) {

    }
    console.log("url page: " + page_number);
  }

  const homeAPI = () => {
    fetch("itemsprototype.json")
      .then(response => response.json())
      .then(
        list => {
          
          let start = 8 * page_number;
          let totalItem = list.data.filter(item => item.type === 'shoes').length;
          console.log("item count "+totalItem);
          const arrlist = list.data.slice(start, start + 8).map((allData) => {
            // filter items
            if (allData.type === 'shoes') {

              return <div className="card-shell">
                <div className="card">
                  <div className="image-box">
                    <img className="image-size" src={allData.picturelink}
                      alt="Denim Jeans" loading="lazy" />
                  </div>
                  <div className="item-name">
                    <a href={allData.picturelink}>{allData.itemname}</a>
                  </div>
                  <p className="price">{allData.price}</p>
                  <p className="description">empty</p>
                  <p><button className="card-button">Ver articulo</button></p>
                </div>
              </div>
            }
          }
          );


          console.log("item count "+totalItem);

          if ((totalItem % 8)) {
            setMaxPages(parseInt(totalItem / 8, 10));
            
            console.log("over flow: " + maxPages);
          } else {
            setMaxPages(parseInt(totalItem / 8, 10) - 1);
            console.log("pages limit: " + maxPages);
          }
          // 
          if (pageCount < maxPages-1) {
            // let prev = document.getElementById("pre-bot");
            // prev.className = "hidden-div";
            let nextPage = document.getElementById("nxt-bot");
            nextPage.className = "show-div";
          }
          if (pageCount >= (1)) {
            // let nextPage = document.getElementById("nxt-bot");
            // nextPage.className = "hidden-div";
            let prev = document.getElementById("pre-bot");
            prev.className = "show-div";
          }

          dispatch(setItems(arrlist));

        }
      )
  }
  react.useEffect(() => {
    getUrl();
    homeAPI();
  }, [])

  const next = () => {

    // let prev = document.getElementById("pre-bot");
    // prev.className = "show-div";
    let newPage = page_number +1;
    if (newPage <= (maxPages)) {
      dispatch(setPage(newPage));
      handleOnClick(newPage);
    }

    console.log("page now:" + page_number);
    // get request and data populations
    dispatch(getItems());
  }

  const previews = () => {
    let newPage = page_number - 1;
    const next = document.getElementById("nxt-bot");
    if (newPage >= 0) {
      dispatch(setPage(newPage));
      handleOnClick(newPage);
    }

    next.className = "show-div";
    console.log("page now:" + newPage);
    // get request and data populations
    dispatch(getItems());

  }

  return (
    <div >
      <div className="container">{items}</div>
      <div className="centered">
        <button id="pre-bot" className="fload-left" onClick={function (event) { previews(); }} >&#8592;
          </button>
        <div className="fload-left box-page" >{page_number}</div>
        <button id="nxt-bot" className="fload-left" onClick={function (event) { next(); }} >&#8594;
          </button>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  page_number: state.pageReducer.page_number,
  items: state.pageReducer.items
});
export default connect(mapStateToProps)(Shoes);
