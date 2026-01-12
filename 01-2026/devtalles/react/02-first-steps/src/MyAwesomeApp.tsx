import type { CSSProperties } from "react";

const firstName = "Miguel";
const lastName = "Decode";

const favoriteGames = ["Hollow knight", "Elden Ring", "Crash Team Racing"];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Canada",
};

export const MyAwesomeApp = () => {
  const myStyles: CSSProperties = {
    backgroundColor: "teal",
    borderRadius: isActive ? 10 : 0,
    padding: 10,
    color: "white",
  };

  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p className="mi-clase-favorita">{favoriteGames.join(",")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
