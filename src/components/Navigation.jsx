import { Link } from "react-router-dom";
import "./style/navigation.css";

export default function Navigation() {
  return (
    <section id="nav-sec">
      <ul id="nav">
        <Link to="/home" className="nav-item link">
          Home
        </Link>
        <Link to="/items" className="nav-item link">
          Items
        </Link>
      </ul>
    </section>
  );
}
