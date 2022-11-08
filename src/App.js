import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import HeaderComponent from "./Body/Header";
import NewsGroupComponent from "./Body/NewsGroup";
import "./Body/News.scss";

function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent />
    </Container>
  );
}

export default App;
