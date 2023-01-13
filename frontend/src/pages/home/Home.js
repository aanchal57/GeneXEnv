import React, { useState, useEffect } from "react";
// import '../../App.css';
import "./Home.css";
import HeroSection from "../../components/HeroSection";
import Search from "./Search";
import SearchBar from "./SearchBar";
import Footer from "../../components/Footer";
import ListPage from "./ListPage";

const Home = () => {
  const [genes, setGenes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    //send a get request to the backend to get the list of genes
    fetch("http://127.0.0.1:8000/api/pubgenes/")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setGenes(result);
        setSearchResults(result);
      });
  }, []);

  return (
    <React.Fragment>
      <HeroSection />
      <div className="wave-seperator">
        <Search />
        <SearchBar genes={genes} setSearchResults={setSearchResults} />
        
        <ListPage searchResults={searchResults} />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
