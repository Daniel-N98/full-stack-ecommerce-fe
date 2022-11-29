import { useState } from "react";

export default function ItemSearch() {
  const [item, setItem] = useState("");

  return (
    <section id="item-search-bar">
      <form>
        <label htmlFor="item-search">Search</label>
        <br />
        <input
          type="text"
          className="search-input"
          name="item-search"
          value={item}
          placeholder="Enter an item name"
          onChange={(event) => setItem(event.target.value)}
        />
      </form>
    </section>
  );
}
