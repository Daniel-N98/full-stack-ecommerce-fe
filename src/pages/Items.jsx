import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserItems } from "../utils/requests";

export default function Items({ user_id }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUserItems(3)
      .then((items) => {
        setIsLoading(false);
        setItems(items);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  }, [user_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="items-list">
      <h1>Items page</h1>
      {items.map((item) => {
        return (
          <section
            className="item-preview"
            key={item.name + item.description}
            style={{ border: "2px solid", margin: "30px" }}
          >
            <h3>Name: {item.name}</h3>
            <p>Desc: {item.description}</p>
            <p style={{ color: "red" }}>£{item.cost}</p>
            <button>
              <Link to={`/items/${item.user_id}/${item.item_id}`}>View</Link>
            </button>
          </section>
        );
      })}
    </section>
  );
}
