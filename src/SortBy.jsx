import "./sortBy.css";

export default function SortBy() {
  return (
    <div className="sort-by-dropdown">
      <button onClick={myFunction} className="sort-by-dropbtn">
        Sort By
      </button>
      <div id="sortby-dropdown" className="sort-by-dropdown-content">
        <a
          href={`${currentUrl}`}
          onClick={() => handleQueryChange("productname", "ASC")}
        >
          Alphabetical
        </a>
        <a
          href={`${currentUrl}`}
          onClick={() => handleQueryChange("productprice", "ASC")}
        >
          Price {"(low to high)"}
        </a>
        <a
          href={`${currentUrl}`}
          onClick={() => handleQueryChange("productprice", "DESC")}
        >
          Price {"(high to low)"}
        </a>
      </div>
    </div>
  );
}
