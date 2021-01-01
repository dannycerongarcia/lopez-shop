import '../CSS/home.css';
import '../CSS/card.css';
import react, { useState } from 'react';



function Home() {

  const [itemList, setItemsList] = useState([]);
  const homeAPI = () => {
    fetch("itemsprototype.json")
      .then(response => response.json())
      .then(
        list => {
          // console.log(list);
          const arrlist = list.data.slice(0, 8).map((allData) =>
          <div className="card-shell">
          <div class="card">
            <div className="image-box">
            <img className="image-size" src={allData.picturelink} alt="Denim Jeans" />
            </div>
            <a href={allData.picturelink}>Tailored Jeans</a>
            <p class="price">{allData.price}</p>
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

      {/* <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div>

      <div className="card-shell">
        <div class="card">
          <img className="image-box" src="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg" alt="Denim Jeans" />
          <a href="https://m.media-amazon.com/images/I/51e2GoA9DCL._AA210_.jpg">Tailored Jeans</a>
          <p class="price">$19.99</p>
          <p className="description">Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button className="card-button">Ver articulo</button></p>
        </div>
      </div> */}

    </div>

  );
}

export default Home;
