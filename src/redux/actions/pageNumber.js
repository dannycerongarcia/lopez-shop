export const setPage = page_number =>({
    type: 'SET_PAGE',
    page_number,
});

export const setItems = items =>({
    type: 'SET_ITEMS',
    items,
});

export const getItems = () => (dispatch,getState) =>{
    fetch("itemsprototype.json")
      .then(response => response.json())
      .then(
        list => {

          let totalItem = list.data.filter(item => item.type === 'shoes').length;
          let start = 8* getState().pageReducer.page_number;

          const arrlist = list.data.slice(start, start + 8).map((allData) =>{
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

          let itemCount;

          if ((totalItem % 8)) {
            itemCount = parseInt(totalItem / 8, 10);
            
            console.log("over flow: " + itemCount);
          } else {
            itemCount = parseInt(totalItem / 8, 10) - 1;
            console.log("pages limit: " + itemCount);
          }
          // 
        //   if (getState().pageReducer.page_number <= 1) {
        //     let prev = document.getElementById("pre-bot");
        //     prev.className = "hidden-div";
        //   }
        //   if (getState().pageReducer.page_number >= (itemCount - 1)) {
        //     let nextPage = document.getElementById("nxt-bot");
        //     nextPage.className = "hidden-div";
        //   }

        //   dispatch(setItems([]));
          dispatch(setItems(arrlist));
          console.log(getState().pageReducer.items)
        }
      )
}