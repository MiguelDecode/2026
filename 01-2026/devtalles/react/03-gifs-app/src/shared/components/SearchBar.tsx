import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  handleSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", handleSearch }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(query);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [query, handleSearch]);

  const handleSearchButton = () => {
    handleSearch(query);
    setQuery("");
  };

  const handleSearchInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(query);
      setQuery("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleSearchInput}
      />
      <button onClick={handleSearchButton}>Buscar</button>
    </div>
  );
};
