import React from 'react';
import Counter from './components/useState/Exercice/Counter';
import TodoList from './components/useState/Exercice/TodoList';
import Profile from './components/useState/Exercice/Profile';
import ShoppingList from './components/useState/Exercice/ShoppingList';

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default App;