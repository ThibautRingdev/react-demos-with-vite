import Greeting from "./components/loops/Greeting";
import UserStatus from "./components/loops/UserStatus";
import Weather from "./components/loops/Weather";

function App() {
  return (
    <div>
      {/* Test de bonjour selon les horaire journalier */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting timeOfDay="evening" />

      {/* Test de température */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus tests */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={false} />
    </div>
  );
}

export default App;
