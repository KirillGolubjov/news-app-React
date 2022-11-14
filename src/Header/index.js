import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

function HeaderComponent() {
  return (
    <Navbar bg="light" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          CryptoNews
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
