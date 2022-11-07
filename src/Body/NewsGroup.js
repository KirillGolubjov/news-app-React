import CardGroup from "react-bootstrap/CardGroup";
import NewsCardComponent from "./NewsCard";

function NewsGroupComponent() {
  return (
    <CardGroup>
      <NewsCardComponent />
      <NewsCardComponent />
      <NewsCardComponent />
    </CardGroup>
  );
}

export default NewsGroupComponent;
