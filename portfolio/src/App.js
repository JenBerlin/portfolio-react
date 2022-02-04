// In App.js everything comes together form components and/or pages;
import MenueBar from "./components/MenueBar";
import Project from "./pages/Project";
import "./index.css";

function App() {
  return (
    // these are fragments <> + </>
    <>
      <MenueBar />
      <Project />
    </>
  );
}

export default App;
