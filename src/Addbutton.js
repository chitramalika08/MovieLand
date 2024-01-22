import React, { useState } from "react";

function Addbutton({ onAdd }) {
  const [item, setItem] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(item);
    // Clear the form fields
    setItem({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={item.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={item.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={item.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={item.phone}
        onChange={handleChange}
      />
      
      <button type="submit">Add</button>
    </form>
  );
}

export default Addbutton;