import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Search By");

  const options = [
    "All Categories",
    "Author Name",
    "Publishers",
    "Genes",
    "Other Keywords"
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <React.Fragment>

      <div className="container">
          <div className="search-bar">
              <div className={`select`} onClick={toggleDropdown}>
                  <p>{selected}</p>
                  <i className={isDropdownOpen ? 'fa-sharp fa-solid fa-caret-up' : 'fa-sharp fa-solid fa-caret-down'}></i>
                  {isDropdownOpen && <ul className={`${isDropdownOpen ? "open-modal" : "close-modal"}`}>
                    {options.map(option=><li key={option} onClick={event=>setSelected(event.target.outerText)}>{option}</li>)}
                  </ul>}
              </div>
              <input type="text" placeholder=" Search here..."/>
          </div>
      </div>
    </React.Fragment>
  )
}

export default SearchBar