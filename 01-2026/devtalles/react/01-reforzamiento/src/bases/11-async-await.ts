import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "jKGBEAkLFHLUKN2fw3lCLGMvEkQEqXya";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async () => {
  const res = await fetch(url);

  const { data }: GiphyRandomResponse = await res.json();

  return data.images.original.url;
};

// getRandomGifUrl().then((url) => createImageInsideDOM(url));
getRandomGifUrl().then(createImageInsideDOM);
