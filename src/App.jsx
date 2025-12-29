const Move = () => {
  function moveHandler() {
    alert("Mouse move event fired");
    console.log("Mouse move event fired");
  }

  return <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum augue lorem. Vivamus imperdiet, leo. </p>
}

const App =() => {
    return ( 
    <section>
        <Move/>
    </section>
    );
};

export default App;
