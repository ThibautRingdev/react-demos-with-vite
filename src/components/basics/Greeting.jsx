function Greeting() {
    const name = "Thibaut"
    const currentDate = new Date();
    return <div>
        <h1>{name}</h1>
        <p>Date actuelle: {currentDate.toLocaleDateString()}</p>
    </div>
}

export default Greeting;