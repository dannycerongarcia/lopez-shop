import '../CSS/home.css';
import '../CSS/card.css';
import react, { useState } from 'react';


function Home() {

  const [itemList, setItemsList] = useState([]);
  const [itemCount, setItemsCount] = useState(0);
  const homeAPI = () => {
    fetch("itemsprototype.json")
      .then(response => response.json())
      .then(
        list => {
          
          if(list.data.length % 8){
            const pageCount = parseInt(list.data.length / 8, 10);
            setItemsCount(pageCount+1);
            console.log("over flow: "+pageCount);
          }else{
            setItemsCount(parseInt(list.data.length / 8, 10));
            console.log("pages limit: "+itemCount);
          }
          // console.log("pages limit: "+list.data.length / 5);
          const arrlist = list.data.slice(0, 8).map((allData) =>
            <div className="card-shell">
              <div class="card">
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
          );
          setItemsList(arrlist);
          
        }
        
      );

  }
  react.useEffect(() => homeAPI(), [])
  return (
    <div className="container">
      {itemList}
    </div>

  );
}

export default Home;
