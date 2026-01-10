import React, { useState } from 'react';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name.trim() === "" || newItem.quantity === "") return;
        setItems(prevItems => [
            ...prevItems,
            { name: newItem.name, quantity: newItem.quantity }
        ]);
        setNewItem({ name: '', quantity: '' });
    };

    return (
        <div>
            <h2>Shopping List</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Item name"
                    value={newItem.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    min="1"
                    value={newItem.quantity}
                    onChange={handleChange}
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        {item.name} (x{item.quantity})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;