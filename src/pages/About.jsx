import React from "react";
import about_1 from "../assets/about.png";

function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="about" className="container text-center">
        <div className="row">
          <div className="col-12 col-md-6" style={{ alignContent: "center" }}>
            {/* <h1>Hii.</h1> */}
            <h2>What drives me?</h2>
            <p>
              I love creating impactful applications that enhance user
              experiences and streamline processes. Whether it's developing
              dynamic web applications or designing responsive mobile
              interfaces, I am always eager to explore new technologies and push
              my limits.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src={about_1} alt="Aman Gupta" className="Image_001" />
          </div>
        </div>
      </div>
      <br />
      <br />

      <center>
        <h1>Skills</h1>
      </center>
      <br />
      <div className="card-container">
        <div className="card">
          <h1>HTML</h1>
        </div>
        <div className="card">
          <h1>CSS</h1>
        </div>
        <div className="card">
          <h1>JS</h1>
        </div>
        <div className="card">
          <h1>Python</h1>
        </div>
        <div className="card">
          <h1>Java</h1>
        </div>
      </div>
      <br />
      <br />
      <div className="card-container">
        <div className="card">
          <h1>C#.net</h1>
        </div>
        <div className="card">
          <h1>ASP.net</h1>
        </div>
        <div className="card">
          <h1>React</h1>
        </div>
        <div className="card">
          <h1>Node.js</h1>
        </div>
      </div>
      <br />
      <div className="card-container">
        <div className="card">
          <h1>SQL</h1>
        </div>
        <div className="card">
          <h1>Laravel</h1>
        </div>
        <div className="card">
          <h1>Flutter</h1>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default About;
