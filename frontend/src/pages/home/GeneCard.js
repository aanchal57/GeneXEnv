import React from "react";

export default function GeneCard({ gene }) {
  return (
    <article className="genecard">
      <div>
        <h4> {gene.clin_var}</h4>
      </div>
      <div>
        <h6>FUll Name: {gene.full_name}</h6>
        <h6>Diseases: {gene.diseases}</h6>
        <h6>Wikepedia: {gene.wikipedia}</h6>
        <h6>No. of SNPs: {gene.no_of_snps}</h6>
        <h6>Diseases: {gene.diseases}</h6>
      </div>
    </article>
  );
}
