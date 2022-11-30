import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItems } from "../utils/requests";

export default function ItemsList({ searchTerm, itemsIn }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (items[0]) {
      setItems((items) =>
        items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setIsLoading(false);
    } else {
      fetchItems().then((itemsRe) => {
        setItems(itemsRe.filter((item) => item.name.includes(searchTerm)));
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
            <img src={item.preview_url} alt="Item preview image" />
            <h2>Name: {item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
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
