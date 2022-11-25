import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
import Figure from 'react-bootstrap/Figure';

// Как и любая функция в JS так же и компоненты принимают props(properties)
// Компонент может принять бесконечное кол-во propreties, но хранит их в одной переменной тип. объекте.
// Properties передаются в компонент так же как HTML element мы передаём в атрибуты.
// <Component prop1={1} prop2={2} />
// В компоненте props не могут меняться
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
          <Button variant="secondary" onClick={handleClose} className="w-25">
            <a
              href={article.url}
              class="text-decoration-none text-white"
              target="_blank"
            >
              Read more
            </a>
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
