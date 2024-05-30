import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleCountChange = (change) => {
    setCount((prevCount) => {
      let newCount = prevCount;
      if (change === "increment") {
        newCount = prevCount + 1;
        onCountChange(1);
      } else if (change === "decrement" && prevCount > 0) {
        newCount = prevCount - 1;
        onCountChange(-1);
      }
      return newCount;
    });
  };
console.log(count)
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <IoIosRemoveCircleOutline onClick={() => handleCountChange("decrement")} />
            <span className="count">{count}</span>
            <IoMdAddCircleOutline onClick={() => handleCountChange("increment")} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
