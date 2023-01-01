import React from "react";

export default function GeneCard({ gene }) {
  return (
    <article className="genecard">
      
      <div>
        <h6>Full Name: {gene.full_name}</h6>
        <h6>Title: {gene.title}</h6>
        <h6>Pubmed_Id: {gene.pubmed_id}</h6>
        <h6>Keyword: {gene.keyword}</h6>
        <h6>Article_url:<a href={gene.pubmed_url}> Visit Article</a></h6>
      </div>
    </article>
  );
}
