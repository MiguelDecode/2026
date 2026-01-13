interface Props {
  searches: string[];
  handlePreviousTag: (tag: string) => void;
}

export const PreviousSearches = ({ searches, handlePreviousTag }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li
            key={search}
            onClick={() => {
              handlePreviousTag(search);
            }}
          >
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
