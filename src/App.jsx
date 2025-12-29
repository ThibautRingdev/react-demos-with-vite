import { useState } from "react"

const App = () => {
  const [movies, setMovies] = useState([
    {id: '1', title: "Spider-Man 1", ratings: 7},
    {id: '2', title: "Spider-Man 2", ratings: 9},
    {id: '3', title: "Spider-Man 3", ratings: 4}
  ]);

  const handleClick = () => {
    setMovies(
      movies.map(m => m.id === '1' ? {...m, title: "John Wick 4"} : m)
    )
  }

  return <section>
    {movies.map(m => (
      <li key={m.id}>{m.title}</li>
    ))}

    <button onClick={handleClick}>Change le nom avec ce bouton</button>
  </section>;
};

export default App;