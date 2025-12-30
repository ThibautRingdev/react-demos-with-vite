import React, { useState } from 'react';

function ExempleThree() {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Entre ton nom"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
}

export default ExempleThree;