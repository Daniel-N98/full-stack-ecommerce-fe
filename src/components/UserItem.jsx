import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchUserItemByID } from "../utils/requests";

export default function UserItem() {
  const { user_id, item_id } = useParams();
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUserItemByID(user_id, item_id)
      .then((itemData) => {
        setItem(itemData[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [user_id, item_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {item ? (
        <section className="item-p-details">
          <h3>Name: {item.name}</h3>
          <p>Desc: {item.description}</p>
          <p style={{ color: "red" }}>£{item.cost}</p>
        </section>
      ) : (
        <h2>Item not found.</h2>
      )}
    </div>
  );
}
