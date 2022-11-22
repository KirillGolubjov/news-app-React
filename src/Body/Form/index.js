import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getEverything } from '../../services/apiServices';
import { setPage, setErrorMessage } from '../../services/stateService';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

function FormComponent({ show, handleClose, setArticles, searchProps }) {
  const [startDateFrom, setStartDateFrom] = useState(new Date());
  const [startDateTo, setStartDateTo] = useState(new Date());
  const dateFormat = 'dd.MM.yyyy';
  const pageSize = useSelector(state => state.searchParams.pageSize);
  const dispatch = useDispatch();

  const languages = [
    { label: 'English', code: 'en' },
    { label: 'Russian', code: 'ru' },
    { label: 'German', code: 'de' },
    { label: 'French', code: 'fr' },
    { label: 'Spanish', code: 'es' },
  ];
  const capitalizeLetter = function (str) {
    return str[0].toUpperCase() + str.substring(1);
  };
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      q: event.target.q.value,
      from: moment(startDateFrom).format('YYYY-MM-DDT00:00:00.000'),
      to: moment(startDateTo).format('YYYY-MM-DDT23:59:59.999'),
      language: event.target.language.value,
      searchIn: [...event.target.searchIn]
        .filter(input => input.checked)
        .map(input => input.value)
        .join(','),
      pageSize,
    };

    if (moment(data.from).isAfter(data.to)) {
      dispatch(setErrorMessage('Wrong data from'));
      return;
    }

    const response = await getEverything(data);
    const responseData = await response.json();
    setArticles(responseData.articles);
    dispatch(setPage(1));
    handleClose();
  }
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search News</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              type="text"
              name="q"
              placeholder="Enter keywords or phrases"
              defaultValue={searchProps.q}
            />
            <Form.Text className="text-muted">
              Advanced search is supported here
            </Form.Text>
          </Form.Group>

          {['title', 'description', 'content'].map(type => (
            <div key={`${type}`} className="mb-3">
              <Form.Check
                label={capitalizeLetter(type)}
                name="searchIn"
                type="checkbox"
                value={type}
                id={`${type}-1`}
                defaultChecked={searchProps.searchIn.includes(type)}
              />
            </div>
          ))}
          <Form.Group className="mb-3">
            <Form.Label>From - to</Form.Label>
            <InputGroup className="mb-3 flex-nowrap">
              <DatePicker
                className="form-control"
                selected={startDateFrom}
                onChange={date => setStartDateFrom(date)}
                name="from"
                dateFormat={dateFormat}
              />
              <DatePicker
                className="form-control"
                selected={startDateTo}
                onChange={date => setStartDateTo(date)}
                name="to"
                dateFormat={dateFormat}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select language</Form.Label>
            <Form.Select defaultValue={searchProps.language} name="language">
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default FormComponent;
