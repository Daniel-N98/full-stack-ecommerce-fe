import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import UserItem from "./components/UserItem";
import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/items"
          element={<Items loadState={{ isLoading, setIsLoading }} />}
        />
        <Route
          path="/items/:user_id/:item_id"
          element={<UserItem loadState={{ isLoading, setIsLoading }} />}
        />
      </Routes>
    </div>
  );
}

export default App;
