import React from 'react';
import Counter from './components/useState/Exercice/Counter';
import TodoList from './components/useState/Exercice/TodoList';
import Profile from './components/useState/Exercice/Profile';
import ShoppingList from './components/useState/Exercice/ShoppingList';
import Copyinput from './components/useState/Exercice/Copyinput';

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
      <Copyinput />
    </div>
  );
}

export default App;