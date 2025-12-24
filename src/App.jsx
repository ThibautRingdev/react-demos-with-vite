import Person from "./components/loops/Person";
import Product from "./components/loops/Product";

const App = () => {
  return (
    <>
      <Person name="Alice" age={28} />
      <Person name="Bob" age={32} />
      <Product name="iPad" price="600€" />
    </>
  )
}

export default App;
