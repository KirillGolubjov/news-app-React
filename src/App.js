import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import HeaderComponent from "./Body/Header";
import NewsGroupComponent from "./Body/NewsGroup";

function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent />
    </Container>
  );
}

export default App;
