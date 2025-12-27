function Greeting({ timeOfDay }) {
    if (timeOfDay === "morning") {
        return <h1>Good Morning</h1>;
    } else if (timeOfDay === "afternoon") {
        return <h1>Good Afternoon</h1>;
    } else {
        return null;
    }
}

export default Greeting;