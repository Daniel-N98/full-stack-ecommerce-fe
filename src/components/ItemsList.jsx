import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItems } from "../utils/requests";

let itemsClone;

export default function ItemsList({ searchTerm }) {
  function filterList() {
    return itemsClone.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (itemsClone) {
      setItems(filterList());
      setIsLoading(false);
    } else {
      fetchItems().then((itemsRe) => {
        itemsClone = [...itemsRe];
        setItems(filterList());
        setIsLoading(false);
      });
    }
  }, [searchTerm]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section id="items-list">
      {items.map((item) => {
        return (
          <div
            key={item.name + item.description}
            style={{ border: "2px solid", margin: "30px" }}
          >
            <h2>Name: {item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Category: {item.category_id}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
              <strong>Cost: £{item.cost}</strong>
            </p>
            <button>
              <Link to={`/items/${item.user_id}/${item.item_id}`}>View</Link>
            </button>
          </div>
        );
      })}
    </section>
  );
}
