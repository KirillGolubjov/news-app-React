import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setTotalResults } from '../services/stateService';
import { getEverything } from '../services/apiServices';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import './News.scss';

function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const searchParams = useSelector(state => state.searchParams);

  useEffect(() => {
    (async function () {
      try {
        const response = await getEverything(searchParams);
        const responseData = await response.json();
        if (responseData.status === 'error') {
          throw responseData;
        }
        setArticles(responseData.articles);
        dispatch(setTotalResults(responseData.totalResults));
      } catch (error) {
        dispatch(setErrorMessage(error.message));
      }
    })();
  }, [searchParams, dispatch]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Search
      </Button>

      <Row xs={1} md={2} lg={3} className="g-2">
        {articles.map((article, idx) => (
          <Col key={idx}>
            <NewsCardComponent article={article} />
          </Col>
        ))}
      </Row>
      <FormComponent
        show={show}
        handleClose={handleClose}
        setArticles={setArticles}
        searchProps={searchParams}
      />
    </>
  );
}

export default NewsGroupComponent;
