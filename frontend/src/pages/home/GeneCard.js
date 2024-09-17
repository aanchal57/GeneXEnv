import React from "react";

export default function GeneCard({ gene }) {
  return (
    <article className="genecard">
      
      <div>
        <h6>Title: {gene.title}</h6>
        <h6>Abstract: {gene.abstract} </h6>
        <h6>Pubmed_Id: {gene.pubmed_id}</h6>
        <h6><a href={gene.pubmed_url} target="_blank" rel="noopener noreferrer"> Visit Article</a></h6>
      </div>
    </article>
  );
}
