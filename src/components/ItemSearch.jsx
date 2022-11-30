export default function ItemSearch({ searchTermState }) {
  const { searchTerm, setSearchTerm } = searchTermState;

  return (
    <section id="item-search-bar">
      <form>
        <label htmlFor="item-search">Search</label>
        <br />
        <input
          type="text"
          className="search-input"
          name="item-search"
          value={searchTerm}
          placeholder="Enter an item name"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
    </section>
  );
}
