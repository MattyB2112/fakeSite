import "./SearchBar.css";

export default function SearchBar() {
  return (
    <>
      <div className="search-container">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for a product..."
            className="search-input"
          />
        </div>
      </div>
    </>
  );
}
