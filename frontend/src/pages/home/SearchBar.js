import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ genes, setSearchResults }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select Environment");
  const [tempResults, setTempResults] = useState([]);

  const options = [
     "Alcohol", "Tobacco", "Cigarette", "Exercise", "Physical Activity", "Diet"
  ];

  const handleChange = (event) => {
    if (!event.target.value) return setSearchResults(genes);

    const results = genes.filter(
      (gene) =>
        gene.gene.includes(event.target.value)
    );

    setSearchResults(results);
    setTempResults(results);
    console.log(results);

    event.preventDefault();
  };

  const handleEnvSelect = (event) => {
    setSelected(event.target.outerText)
    console.log(event.target.outerText)
    
    const results = genes.filter(
      (gene) => gene.gene.includes(event.target.value)
    );

    console.log(tempResults)
    const finalresults = tempResults.filter((gene) => gene.environment == event.target.outerText.toLowerCase())

    setSearchResults(finalresults);
    console.log(finalresults);
  }

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <React.Fragment>
      <div className="container">
        <div className="search-bar">
          <div className={`select`} onClick={toggleDropdown}>
            <p>{selected}</p>
            <i
              className={
                isDropdownOpen
                  ? "fa-sharp fa-solid fa-caret-up"
                  : "fa-sharp fa-solid fa-caret-down"
              }
            ></i>
            {isDropdownOpen && (
              <ul
                className={`${isDropdownOpen ? "open-modal" : "close-modal"}`}
              >
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={handleEnvSelect}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            placeholder=" Search here..."
            onChange={handleChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
