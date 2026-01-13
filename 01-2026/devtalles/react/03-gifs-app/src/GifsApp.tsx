import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleSearch = async (query: string = "") => {
    const formatQuery = query.toLocaleLowerCase().trim();

    if (formatQuery.length === 0) return;

    if (previousSearches.includes(formatQuery)) return;

    setPreviousSearches([query, ...previousSearches].splice(0, 8));

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  const handlePreviousTag = (tag: string) => {
    console.log(`Se busco ${tag}`);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscardor de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search Bar */}
      <SearchBar
        placeholder="Busca lo que quieras"
        handleSearch={handleSearch}
      />

      {/* Previous Searches */}
      <PreviousSearches
        searches={previousSearches}
        handlePreviousTag={handlePreviousTag}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
