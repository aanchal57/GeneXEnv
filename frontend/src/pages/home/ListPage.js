import React from "react";
import GeneCard from "./GeneCard";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((gene) => (
    <GeneCard key={gene.id} gene={gene} />
  ));

  const content = results.length ? (
    results
  ) : (
    <article>
      <p>No results found</p>
    </article>
  );
  return <main>{content}</main>;
};

export default ListPage;
