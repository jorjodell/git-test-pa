const { useState } = React

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item])
  }

  return (
    <div className="App">
      <div className="product-list">
        {data.map((product) => (
          <button className="product" key={product.id} onClick={() => addToBasket(product)}>
            <div>{product.title}</div>
            <div>{product.price} c</div>
          </button>
        ))}
      </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
          {basket.map((product) => (
            <button className="product" key={product.id}>
              <div>{product.title}</div>
              <div>{product.price} c</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
