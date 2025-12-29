import { useState } from 'react'

const App= () => {
  const [movie, setMovie] = useState({
    title: "Avatar : de Feu et de Cendres",
    ratings : 6,

  });

  const handleClick = () => {
    // const  copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // }


    setMovie({...movie, ratings: 5});
  }

  return <section>
    <h1>Titre: {movie.title}</h1>
    <p>Note: {movie.ratings}/10</p>
    <button onClick={handleClick}>Change Ratings</button>
  </section>
}

export default App