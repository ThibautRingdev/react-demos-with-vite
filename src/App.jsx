import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(['Alex', 'John'])

  const addOneFriend = () => setFriends([...friends, "Thibaut"]);
  const removeOneFriend = () => setFriends(friends.filter(f => f !== "Thibaut"));
  const updateOneFriend = () => {
    setFriends(friends.map(f => f === "Alex" ? "Alex Toucourt" : f));
  }

 return <section>
  {friends.map(f => (
    <li key={f}>{f}</li>
  ))}
  <button onClick={addOneFriend}>Ajouter un nouvel ami</button>
  <button onClick={removeOneFriend}>Retirer un ami de cette liste</button>
  <button onClick={updateOneFriend}>Actualiser la liste</button>
 </section>;

};

export default App;