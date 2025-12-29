const Button = () => {
  const handleClick= () => console.log(Math.round(Math.random() * 10))
  return <button onClick={handleClick}>Click</button>
}

function App() {
    return <Button />;
}

export default App;
