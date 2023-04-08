import { useState } from "react";

function Searchdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Dogs", "Cats", "Small Pets", "Pet Foods"];
  return (
    <div className="searchdown">
      <div className="searchdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Please Select The Pet You Are Looking...
        <span className="fa fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="searchdown-content">
          {options.map((option) => (
            <div
              className="searchdown-item"
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

export default Searchdown;
