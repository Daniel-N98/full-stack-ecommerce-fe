import { useState } from "react";
import ItemSearch from "../components/ItemSearch";
import ItemsList from "../components/ItemsList.jsx";

export default function Items() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className="items-list">
      <h1 className="text-center">Items page</h1>
      <section id="search">
        <ItemSearch searchTermState={{ searchTerm, setSearchTerm }} />
      </section>
      <ItemsList searchTerm={searchTerm} />
    </section>
  );
}
