import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './Header';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />
        <Route
          path="/:q"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />
        <Route
          path="/lang/:lang"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />

        <Route path="/contact" element={<ContactComponent />} />
      </Routes>

      <ErrorModalComponent />
    </Container>
  );
}

export default App;
// npm i react-router-dom
