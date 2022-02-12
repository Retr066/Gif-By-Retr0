import { useEffect, useState } from "react";
import { getGifs } from "../utils/GetGifs";

export default function useFetchGifs(Gif) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(Gif)
      .then((img) =>
        setState({
          data: img,
          loading: false,
        })
      )
      .catch((error) => console.error(error.message));
  }, [Gif]);

  return state;
}
