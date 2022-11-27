import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import UserItem from "./components/UserItem";
import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:user_id/:item_id" element={<UserItem />} />
      </Routes>
    </div>
  );
}

export default App;
