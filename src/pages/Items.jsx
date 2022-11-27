import { useEffect, useState } from "react";
import { fetchUserItems } from "../utils/requests";

export default function Items({ user_id }) {
  const [items, setItems] = useState([
    { name: "item1", description: "item1 desc", cost: 500 },
  ]);

  useEffect(() => {
    fetchUserItems(3)
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        alert(error);
      });
  }, [items]);

  const updateItems = (event) => {
    event.preventDefault();
    console.log("go");
    user_id = 3;
  };

  return (
    <section>
      <h1>Items page</h1>
      <button onClick={updateItems}>Click</button>
      {items.map((item) => {
        return (
          <div
            key={item.name + item.description}
            style={{ border: "2px solid", margin: "30px" }}
          >
            <h3>Name: {item.name}</h3>
            <p>Desc: {item.description}</p>
            <p style={{ color: "red" }}>£{item.cost}</p>
          </div>
        );
      })}
    </section>
  );
}
