import { useState } from "react";

function Dropdown4({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Dog Care", "Cat Care", "Small Pet Care"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Pets
        <span className="fa fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown4;
