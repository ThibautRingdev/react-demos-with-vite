import JSXrules from "./components/JSXRules"

const App = () => {
  const myName = "Thib Ring"
  const multiply = (a, b) => a * b;
  return (
  <section>
    <p>2 * 2 = {multiply(2,2)}</p>
    <h1>Mon prénom est {myName}</h1>
    <p>Mes amis sont {['Pierre', 'Jacques', 'Paul']}</p>
  <div> 
    <JSXrules /> 
  </div>
  </section>
  )
}

export default App;