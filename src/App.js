import './App.css';
import './components/ProductItem.css';
import ProductItem from './components/ProductItem.js';

function App() {

  return (
    <div className="App">
      <ProductItem image="/image/ao_1.jpg" title="áo hoa cá tính" price="199.000đ" icon="fas fa-shopping-cart"/>
      <ProductItem image="/image/ao_2.jpg" title="áo đen chấm cổ tròn" price="199.000đ" sale="Giảm 60%" icon="fas fa-shopping-cart"/>
      <ProductItem image="/image/ao_3.jpg" title="áo đỏ gạch sành điệu" price="199.000đ" sale="Giảm 10%" icon="fas fa-shopping-cart"/>
      <ProductItem image="/image/quan.jpg" title="quần ngắn hở đùi" price="199.000đ" icon="fas fa-shopping-cart"/>
    </div>
  );

}

export default App;
