import React, { useState, useEffect } from "react";

export default function Genes() {

  useEffect(() => {
    //send a get request to the backend to get the list of genes
    fetch("http://127.0.0.1:8000/api/pubgenes/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);


  return (
    <div></div>
  )
}
