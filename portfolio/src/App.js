// In App.js everything comes together form components and/or pages;
import MenueBar from "./components/MenueBar";
import Project from "./pages/Project";
import "./index.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    // these are fragments <> + </>
    <>
      <MenueBar />
      {/* <Project /> */}
      <About />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
