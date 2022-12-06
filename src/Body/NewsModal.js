import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
import Figure from 'react-bootstrap/Figure';

function NewsModalComponent({ setShow, show, article }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <Figure.Image alt="" src={article.urlToImage || noImage} />
            <Figure.Caption>{article.url}</Figure.Caption>
          </Figure>
          <p>{article.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            href={article.url}
            className="text-decoration-none text-white"
            target="_blank"
          >
            Read more
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewsModalComponent;
