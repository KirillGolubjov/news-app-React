import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './Header';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';

function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent />
      <PaginationComponent />
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
