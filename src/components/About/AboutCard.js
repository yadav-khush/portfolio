import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khushboo Yadav </span>
            from <span className="purple"> Mumbai,Maharashtra, India.</span>
            <br />I am pursuing MSC in Computer Science
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting/Mandala Art
            </li>
            <li className="about-activity">
              <ImPointRight />Embroidary Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Vibes, Colors & Digital Worlds "{" "}
          </p>
          <footer className="blockquote-footer">Khushboo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
