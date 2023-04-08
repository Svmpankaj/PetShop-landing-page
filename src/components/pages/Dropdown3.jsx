import { useState } from "react";

function Dropdown3({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Dog Breeds", "Cat Breeds", "Small Pet Breeds", "Compare Breeds"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Breeds
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

export default Dropdown3;
