import type { GiphyRandomResponse } from "./data/giphy.response";

const API_KEY = "jKGBEAkLFHLUKN2fw3lCLGMvEkQEqXya";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const myRequest = fetch(url)
  .then((res) => res.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;

    createImageInsideDOM(imageUrl);
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("Fetch finalizado");
  });
