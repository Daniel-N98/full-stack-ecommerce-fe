import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <section>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/items">Items</Link>
      </ul>
    </section>
  );
}
