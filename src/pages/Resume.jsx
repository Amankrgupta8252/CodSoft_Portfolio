import React from "react";
import { Container, Row } from "react-bootstrap"; // <-- Add semicolon here
import Button from "react-bootstrap/Button";
import pdf from "../assets/AmanGuptaResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <div id="resume">
      <Container fluid className="resume-section text-center p-5">
        <h2 className="mb-4">My Resume</h2>
        <embed src={pdf} width="70%" height="1024px" type="application/pdf" />
          <Button className="Button" style={{ width: "30%", background: "#0018ff00" }} href={pdf} target="_blank" download>
            <AiOutlineDownload /> &nbsp;Download Resume
          </Button>
      </Container>
    </div>
  );
}

export default Resume;
