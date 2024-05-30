import { FiHeart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ handleInputChange, query, totalCount }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <Link to="/cart" className="cart-link">
          <AiOutlineShoppingCart className="nav-icons" />
          {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
        </Link>
        <Link to="/">
          <IoHomeOutline className="nav-icons"/>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
