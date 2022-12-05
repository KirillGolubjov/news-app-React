import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setErrorMessage,
  setTotalResults,
  setSearchParams,
} from '../services/stateService';
import { getEverything, getEverythingDummy } from '../services/apiServices';
import { useParams, Link } from 'react-router-dom';
import './News.scss';

function BodyComponent() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { q, lang } = useParams();

  const dispatch = useDispatch();

  const searchParams = useSelector(state => state.searchParams);

  useEffect(() => {
    if (lang && searchParams.language !== lang) {
      dispatch(
        setSearchParams({
          ...searchParams,
          language: lang,
        })
      );
      return;
    }
    (async function () {
      try {
        const response = await getEverything({
          ...searchParams,
          q: q || searchParams.q,
        });
        const responseData = await response.json();

        if (responseData.status === 'error') {
          throw responseData;
        }
        setArticles(responseData.articles);
        dispatch(setTotalResults(responseData.totalResults));
      } catch (error) {
        dispatch(setErrorMessage(error.message));
        const response = await getEverythingDummy();
        const responseData = await response.json();
        setArticles(responseData.articles);
      }
    })();
  }, [searchParams, dispatch, q, lang]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Search
      </Button>
      <Link to="/news-app/bitcoin">Bitcoin today</Link>

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

export default BodyComponent;
