const ValidPassword = () => <h1>Mot de passe valide</h1>
const InvalidPassword = () => <h1>Mot de passe invalide</h1>

const Password = ({isValid}) => {
  // if (isValid) {
  //   return <ValidPassword/>;
  // }
  //   return <InvalidPassword/>;

  return isValid ? <ValidPassword/> : <InvalidPassword/>;
};

const App = () => {
  return <section>
    <Password isValid={true}/>
  </section>
}

export default App;
