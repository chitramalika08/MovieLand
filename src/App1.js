import React, { useState } from "react";
import Addbutton from "./Addbutton";

function App1() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Item List</h1>
      <Addbutton onAdd={addItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            ID: {item.id}, Name: {item.name}, Email: {item.email}, Phone: {item.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App1;





