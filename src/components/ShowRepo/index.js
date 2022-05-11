import React from 'react';

const ShowRepo = ({ name, forkCount, description }) => {
  return (
    <article className="show-card">
      <h1>{name}</h1>
      <h2>Forks: {forkCount}</h2>
      <p>{description}</p>
    </article>
  );
};

export default ShowRepo;
