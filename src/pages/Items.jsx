import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemSearch from "../components/ItemSearch";
import Loading from "../components/Loading";
import { fetchUserItems } from "../utils/requests";

export default function Items({ loadState }) {
  const [items, setItems] = useState([]);
  const { isLoading, setIsLoading } = loadState;
  const { user_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchUserItems(user_id)
      .then((items) => {
        setIsLoading(false);
        setItems(items);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  }, []);

  if (isLoading) return <Loading loadState={loadState} />;

  return (
    <section className="items-list">
      <ItemSearch />
      <h1 className="text-center">Items page</h1>
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
