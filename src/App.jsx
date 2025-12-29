const Copy = () => {
  const copyHandler = (e) => {
    e.preventDefault();
    alert("Veuillez ne pas copier ce contenu !");
  };

  return (
    <p onCopy={copyHandler}>
    Lorem, ipsum dolor sit amet
    </p>
  );
};

function App() {
    return <Copy />;
}

export default App;
