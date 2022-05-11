import React from "react";

const ShowRepo = ({ name, forkCount, summary }) => {
  return (
    <article className="show-card">
      <h1>{name}</h1>
      <h2>Forks: {forkCount}</h2>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
    </article>
  );
};

export default ShowRepo;
