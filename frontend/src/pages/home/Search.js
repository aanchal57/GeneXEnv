import React from 'react'
import './Search.css'
import '../../App.css';
import Typewriter from 'typewriter-effect';

const Search = () => {
  return (
    <div className="search">Search By 
      <span>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 40,
          strings: ["Authors", "Publishers", "Genes", "Keywords"]
        }}
      />
      </span>
    </div>
  )
}

export default Search