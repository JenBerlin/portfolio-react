import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { FaGithub, FaLinkedin, FaXingSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <MDBFooter className="footer pt-4 pb-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <div>
            <a
              className="icons"
              href="https://github.com/JenBerlin"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="icons"
              href="https://de.linkedin.com/in/jennytschauschew"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="icons"
              href="https://www.xing.com/profile/Jenny_Tschauschew"
              target="_blank"
            >
              <FaXingSquare size={30} />
            </a>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
