import React from "react";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  const items = ["Apples", "Bananas", "Cherries", "Dates", "Elderberries"];

  return (
    <div className="app-container">
      <h1 className="app-title">My Fruit List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
