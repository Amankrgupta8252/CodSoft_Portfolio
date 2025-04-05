import React from "react";
import Aman from "../assets/download.png";
import AmanGupta from "../assets/AmanGupta_001.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Col } from "react-bootstrap";
import Type from "./Type";

function Home() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="home">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-6" style={{ alignContent: "center" }}>
              <h1>
                Hii.
                <span class="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h2>I am Aman Gupta</h2>
              <h3>
                <p>I'm a Full Stack Developer from India.</p>
              </h3>
              <h3>
                <Type />
              </h3>
            </div>
            <div className="col-12 col-md-6">
              <img src={Aman} alt="Aman Gupta" className="Image_001" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <div className="AllLink">
          <Col className="Link_1" style={{ marginLeft: "45%" }}>
            <div className="QuickLinks">
              <a
                href="https://www.facebook.com/alokkumar.alokraj.5811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.instagram.com/amankrgupta001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-gupta-0850782b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/Amankrgupta8252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub size={25} />
              </a>
            </div>
          </Col>
        </div>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-6" style={{ alignContent: "center" }}>
              <h1>Hello.!</h1>
              <h2>LET ME INTRODUCE MYSELF</h2>
              <p>
                👋 Hey there! I'm Aman Gupta, a passionate Full-Stack Developer
                with expertise in ReactJS, Java, JavaScript, and Flutter.
                Currently pursuing my B.Tech in Computer Engineering at RK
                University, Rajkot, I thrive on solving complex problems and
                building scalable, user-friendly applications. 💻 With hands-on
                experience in MongoDB, Firebase, and .NET, I have developed
                several real-world projects, including a Café Management System,
                Quiz Applications, and a Food Delivery App. My journey in tech
                has been enriched by internships in Java Development and ReactJS
                at CodSoft and CodTech, where I honed my skills in front-end and
                back-end development.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="profile-container">
                <img src={AmanGupta} alt="Aman Gupta" className="Profile" />
                <div className="profile-blur"></div> {/* Blur effect div */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
