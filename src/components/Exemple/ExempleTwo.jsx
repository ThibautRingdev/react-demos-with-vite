import React, { useState } from 'react'

function ExempleTwo() {
    const [randomNumber, setRandomNumber] = useState(() =>
        Math.floor(Math.random() * 100)
    );


    const generateNewRandomNumber = () => {
        const newNumber = Math.floor(Math.random() *100)
        setRandomNumber(newNumber)
    }
    return <div>
        <h1>Random Number: {randomNumber}</h1>
        </div>;
};

export default ExempleTwo