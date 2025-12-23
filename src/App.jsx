const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  const usersInfo = [
    {
      id: 1,
      username: "Thib",
      email: "test@mail.com",
      localisation: "FR",
    },
  ];

  return (
    <main>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>

      <ul>
        {usersInfo.map((user) => (
          <li key={user.id}>
            {user.username} – {user.localisation} – {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
