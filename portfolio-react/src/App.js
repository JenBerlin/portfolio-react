// In App.js everything comes together form components and/or pages;
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import "./index.css";
import Footer from "./components/Footer";
import Sections from "./components/RenderSections";

function App() {
  const [sections] = useState([
    {
      name: "About",
    },
    {
      name: "Works",
    },
    {
      name: "Resume",
    },
    {
      name: "Contact",
    },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    // these are fragments <> + </>
    <>
      <Navigation
        sections={sections}
        setCurrentPage={setCurrentSection}
        currentPage={currentSection}
      />
      <main>
        <Sections currentPage={currentSection} />
      </main>
      <Footer />
    </>
  );
}

export default App;
