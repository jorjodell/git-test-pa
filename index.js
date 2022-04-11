const { useState } = React

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    const newBasket = [...basket, item]
    setBasket(newBasket)
  }

  const removeFromBasket = (product) => {
    const newBasket = basket.filter((item) => item.id !== product.id)
    setBasket(newBasket)
  }

  const getBasketTotal = () => {
    let sum = 0
    basket.forEach((item) => {
      sum += item.price
    })
    return sum
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
          <span>{getBasketTotal()} c</span>
        </div>
        <div>
          {basket.map((product, i) => (
            <button
              className="product"
              key={i}
              onClick={() => removeFromBasket(product)}
            >
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
