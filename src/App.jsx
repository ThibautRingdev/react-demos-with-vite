import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"

const App = () => {
  return (
    <section>
      <div>
        <Greeting/>
      </div>
      <div>
        <ProductInfo/>
      </div>
    </section>
  )
}

export default App;