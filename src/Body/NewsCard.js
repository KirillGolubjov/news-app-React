import { useState } from "react";
import Card from "react-bootstrap/Card";
import noImage from "../dummy-post-horisontal.jpg";
import NewsModalComponent from "./NewsModal";

function NewsCardComponent() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card onClick={() => setShow(true)}>
        <Card.Img variant="top" src={noImage} />
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Source Name</Card.Subtitle>
          <Card.Text className="text-pointer">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite title="Source Author">Author</cite>
            </footer>
          </blockquote>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Published at</small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow} />
    </>
  );
}

export default NewsCardComponent;
