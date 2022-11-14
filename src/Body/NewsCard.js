import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';

function NewsCardComponent({ article }) {
  const [show, setShow] = useState(false);
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
      <NewsModalComponent show={show} setShow={setShow} />
    </>
  );
}

export default NewsCardComponent;
