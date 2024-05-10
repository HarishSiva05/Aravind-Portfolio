import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aravindhan Senthil </span>
            from <span className="purple"> Tiruppur, India.</span>
            <br />
            I am currently employed as a UI UX Designer in Salesforce.
            <br />
            I have completed my Bachelors Degree in Computer Science at Sri Krishna College of Enginerring and Technology. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            👉 Playing Badminton
            </li>
            <li className="about-activity">
            👉 Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Araviiii</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
