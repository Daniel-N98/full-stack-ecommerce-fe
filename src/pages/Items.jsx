import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemSearch from "../components/ItemSearch";
import ItemsList from "../components/ItemsList.jsx";
import { fetchItems } from "../utils/requests";

export default function Items() {
  const [searchTerm, setSearchTerm] = useState("");
  const itemsIn = fetchItems().then((items) => {
    return items;
  });
  return (
    <section className="items-list">
      <ItemSearch searchTermState={{ searchTerm, setSearchTerm }} />
      <h1 className="text-center">Items page</h1>
      <ItemsList searchTerm={searchTerm} itemsIn={itemsIn} />
    </section>
  );
}
