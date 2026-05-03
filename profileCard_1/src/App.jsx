import "../src/App.css";
function App() {
  return (
    <div className="container">
      <Image />
      <Description />
      <ButtonHandler />
    </div>
  );
}

function Image() {
  return (
    <div className="profile_image">
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.j44Z3q-TZuFymHz6_X2KuQAAAA?pid=Api&P=0&h=180"
        alt="Jonas Schmedtmann"
      />
    </div>
  );
}

function Description() {
  return (
    <>
      <h2>Jonas Schmedtmann</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        possimus illo molestias ipsa commodi. Modi, voluptatibus ad! Deleniti,
        consequuntur ut?
      </p>
    </>
  );
}

function ButtonHandler() {
  return (
    <div>
      <Button
        skill="HTML+CSS"
        style={{ backgroundColor: "#244fd2", color: "white" }}
      />
      <Button
        skill="JavaScript"
        style={{ backgroundColor: "#e9ef37", color: "black" }}
      />
      <Button
        skill="Web Design"
        style={{ backgroundColor: "#42b409", color: "white" }}
      />
      <Button
        skill="Git & GitHub"
        style={{ backgroundColor: "#d96308", color: "white" }}
      />
      <Button
        skill="React"
        style={{ backgroundColor: "#22b8e6", color: "white" }}
      />
      <Button
        skill="Svelte"
        style={{ backgroundColor: "#e90000", color: "white" }}
      />
    </div>
  );
}
function Button(props) {
  return (
    <button className="btn" style={props.style}>
      {props.skill}
    </button>
  );
}

export default App;
