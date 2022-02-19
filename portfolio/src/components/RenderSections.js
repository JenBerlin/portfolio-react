import React from "react";
import About from "./About";
import Project from "../pages/Project";
import Contact from "./Contact";
import Resume from "./Resume";
import Content from "./Content";

function Sections({ currentPage }) {
  const renderSections = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Works":
        return <Project />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      {/* <h2>{currentPage.name}</h2> */}
      <Content>{renderSections()}</Content>
    </div>
  );
}
export default Sections;
