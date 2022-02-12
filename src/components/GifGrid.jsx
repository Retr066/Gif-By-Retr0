import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ Gif }) {
  const { data: images, loading } = useFetchGifs(Gif);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {Gif} </h3>

      {loading && <p className="animate__animated animate__shakeX">Loading</p>}
      <div className="card-grid">
        {images.map((img, key) => {
          return <GifGridItem key={key} {...img} />;
        })}
      </div>
    </>
  );
}
