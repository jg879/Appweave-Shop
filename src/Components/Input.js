const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color,border:"1px solid black" }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;