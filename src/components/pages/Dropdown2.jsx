import { useState } from "react";

function Dropdown2({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Pet Adoption", "Pet Hostel", "Pet Grooming", "Pet Walking", "Pet Transport", "Pet Training", "Pet Mating", "Consult A Vet"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Pet Services
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

export default Dropdown2;
