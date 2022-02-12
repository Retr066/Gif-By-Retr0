export const getGifs = (Gif) => {
  const API_KEY = "GQev6996sGdsnQseyTHibr0BZqi4rpam";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    Gif
  )}&limit=5&api_key=${API_KEY}`;
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((res) => validateFetch(res))
      .then(({ data }) => {
        const res = data.map((img) => {
          return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
          };
        });
        return res;
      })
      .then((res) => resolve(res))
      .catch(function (error) {
        reject(error);
      });
  });
};
const validateFetch = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new TypeError("Error al llamar al endPoint");
  }
};
