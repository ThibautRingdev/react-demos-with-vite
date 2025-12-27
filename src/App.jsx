import UserStatus from "./components/loops/UserStatus";

function App() {
  return (
    <div>
      <UserStatus loggedIn={true} isAdmin={true} />
    </div>
  );
}

export default App;
