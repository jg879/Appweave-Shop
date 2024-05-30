import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import "./index.css";

function App() {
  const [totalCount, changeTotalCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleProductCountChange = (product, countChange) => {
    changeTotalCount((prevCount) => prevCount + countChange);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
      if (existingItem) {
        return prevItems
          .map((item) =>
            item.title === product.title
              ? { ...item, count: item.count + countChange }
              : item
          )
          .filter((item) => item.count > 0); 
      } else {
        return [...prevItems, { ...product, count: countChange }];
      }
    });
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDelete = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== product.title));
    changeTotalCount((prevCount) => prevCount - product.count);
  };

  const filterByQuery = (products, query) => {
    if (!query) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterByCategory = (products, selectedCategory) => {
    if (!selectedCategory) return products;
    return products.filter(
      ({ category, color, gender, newPrice }) =>
        category === selectedCategory ||
        color === selectedCategory ||
        gender === selectedCategory ||
        newPrice.toString() === selectedCategory
    );
  };

  const filteredByQuery = filterByQuery(products, query);
  const filteredItems = filterByCategory(filteredByQuery, selectedCategory);

  const result = filteredItems.map((product) => (
    <Card
      key={product.title}
      img={product.img}
      title={product.title}
      star={product.star}
      reviews={product.reviews}
      prevPrice={product.prevPrice}
      newPrice={product.newPrice}
      onCountChange={(countChange) => handleProductCountChange(product, countChange)}
    />
  ));

  const totalCost = cartItems.reduce((total, item) => total + item.newPrice * item.count, 0);

  return (
    <Router>
      <Navigation query={query} handleInputChange={handleInputChange} totalCount={totalCount} />
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              totalCost={totalCost}
              onIncrement={(item) => handleProductCountChange(item, 1)}
              onDecrement={(item) => handleProductCountChange(item, -1)}
              onDelete={handleDelete}
            />
          }
        />
        <Route
          path="/"
          element={
            <>
              <Sidebar handleChange={handleChange} />
              <Products result={result} />
            </>
          }
        />
      </Routes>
      {/* <div className="total-count">
        <h2>Total Count: {totalCount}</h2>
      </div> */}
    </Router>
  );
}

export default App;
