import React from "react";
import GeneCard from "./GeneCard";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((gene) => (
    <GeneCard key={gene.id} gene={gene} />
  ));

  const content = results.length != 23028 ? (
    results
  ) : (
    <article>
      <p>  </p>
    </article>
  );
  return <main> {content}</main>;
};

export default ListPage;
