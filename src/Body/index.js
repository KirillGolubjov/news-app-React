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
import { getEverything } from '../services/apiServices';
import { useParams, Link } from 'react-router-dom';
import './News.scss';

function NewsGroupComponent() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // useParams - это хук react-router-dom для получения информации со ссылки.
  const { q, lang } = useParams();
  // useDispatch - это хук react-redux и благодаря ему мы можем взаимодействовать с redux
  // useDispatch - это мост между React и Redux
  const dispatch = useDispatch();
  // useSelector - это react-redux хук который следит за redux состоянием и при наличии изменений запускает отрисовку компонента.
  const searchParams = useSelector(state => state.searchParams);

  // UseEffect - это React хук, который запускается после того как первый рендер отрисовка компонента произошло
  // UseEffect принимает два параметра: 1 Функция которую нужно запустить, 2 Массив из переменных от которых будет зависеть дальнейшая работа UseEffect
  // Все внешние переменные которые мы используем в функции, должны быть в массиве зависимостей
  // При любых изменениях этих зависимостей UseEffect запускается
  // При изменении в компоненте не касающихся зависимости UseEffect, не запускают UseEffect, но компонент рендерится, поэтому лучше всего работать в нём с запросами.
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
        // Redux действие необходимо обернуть в dispatch
        dispatch(setTotalResults(responseData.totalResults));
      } catch (error) {
        dispatch(setErrorMessage(error.message));
      }
    })();
  }, [searchParams, dispatch, q, lang]);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-3">
        Search
      </Button>
      <Link to="/bitcoin">Bitcoin today</Link>

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
