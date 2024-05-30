import "./Category.css";
import Input from "../../Components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="polo"
          title="Polo"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="hoodie"
          title="Hoodie"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="oversized"
          title="Oversized"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;