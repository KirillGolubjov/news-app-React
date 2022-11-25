import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';

function NewsCardComponent({ article }) {
  // useState - это функция/хук, которая помогает работать с состоянием компонента
  // Состояние - это информация, которая компонент содержит в себе.
  // При изменении состояния запускается новая отрисовка(render) компонента.
  // У каждого состояния есть своё изначальное значение и функция которая меняет это значение, при изменении состояния.
  // useState принимает как аргумент изначальное значение состояния и выдает массив с двумя значениями: 1: изначальное состояние 2: функцию для изменения состояния
  const [show, setShow] = useState(false);

  // СardComponent - это компонент из npm пакета react-bootstrap.
  // react-bootstrap - это библиотека с готовыми React компонентами написанные с использованием Bootstrap css toolkit.
  return (
    <>
      <Card onClick={() => setShow(true)}>
        <Card.Img variant="top" src={article.urlToImage || noImage} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {article.source.name}
          </Card.Subtitle>
          <Card.Text
            dangerouslySetInnerHTML={{ __html: article.description }}
          ></Card.Text>
          {article.author ? (
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                <cite title="Source Author">{article.author}</cite>
              </footer>
            </blockquote>
          ) : (
            ''
          )}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {moment(article.publishedAt).format('DD.MM.YYYY')}
          </small>
        </Card.Footer>
      </Card>
      <NewsModalComponent show={show} setShow={setShow} article={article} />
    </>
  );
}

export default NewsCardComponent;
