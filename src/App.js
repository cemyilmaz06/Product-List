import Header from "./components/header/Header";
import {categories, products} from "./helper/data"
import Products from "./components/products/Products";
function App() {
  return (
    <div className="App">
      <Header categories={categories}/>
      <Products products={products}/>
    </div>
  );
}

export default App;
