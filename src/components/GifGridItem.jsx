import React from "react";

export default function GifGridItem({ id, title, url }) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img key={id} src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
