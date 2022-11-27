import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchUserItemByID } from "../utils/requests";
import Loading from "./Loading";

export default function UserItem({ loadState }) {
  const { user_id, item_id } = useParams();
  const [item, setItem] = useState({});
  const { isLoading, setIsLoading } = loadState;

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

  if (isLoading) return <Loading />;

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
