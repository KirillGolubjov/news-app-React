import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import moment from 'moment';
import { getEverything } from '../services/apiServices';
import './News.scss';

function NewsGroupComponent(props) {
  const [show, setShow] = useState(false);
  const [formResponse, setFormResponse] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    (async function () {
      const response = await getEverything(props);
      const responseData = await response.json();
      setFormResponse(responseData);
    })();
  }, []);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Search
      </Button>

      <Row xs={1} md={2} lg={3} className="g-2">
        {formResponse?.articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FormComponent
        show={show}
        handleClose={handleClose}
        setFormResponse={setFormResponse}
        searchProps={props}
      />
    </>
  );
}

NewsGroupComponent.defaultProps = {
  q: 'crypto, bitcoin',
  from: moment().format('YYYY.MM.DDT00:00:00.000'),
  to: moment().format('YYYY.MM.DDT23:59:59.999'),
  language: 'en',
  searchIn: 'title,description,content',
  pageSize: 12,
  page: 1,
};

export default NewsGroupComponent;
