import React from "react";

const ShowRepo = ({ name, summary, image }) => {
  console.log(image, rating);

  return (
    <article className="show-card">
      <img
        src={image !== null ? image.medium : "https://http.cat/404"}
        alt={`image of ${name}`}
      ></img>
      <h1>{name}</h1>

      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
    </article>
  );
};

export default ShowRepo;
