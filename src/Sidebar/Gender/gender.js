import React from 'react';
import Input from "../../Components/Input";
// import './Gender.css'; 

function Gender({ handleChange }) {
  return (
    <div style={{marginRight:"20px",marginTop:"20px"}}>
      <h2 className="sidebar-title">Gender</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="gender" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="men"
          title="Men"
          name="gender"
        />
        <Input
          handleChange={handleChange}
          value="women"
          title="Women"
          name="gender"
        />
      </div>
    </div>
  );
}

export default Gender;
