function Cart() {
  const items=["Écouteurs sans fil", "Batterie externe", "Nouveau SSD", "Sweat à capuche"]
  return <div>
    <h1>Caddie 🛒</h1>
    {items.length > 0 && <h2>Tu as  {items.length} objets dans ton caddie</h2>}

    <ul>
      <h4>Produits</h4>

      {items.map((item) => (
      <li key={Math.random()}>{item}</li>
    ))}
    </ul>
    </div>
}


const App = () => {
  return <Cart/>
}

export default App;
