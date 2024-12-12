import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticles, Result } from "../assets/interfaces/IArticles";

const MainArticle = () => {
  const [articles, setArticles] = useState<Result[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (response.ok) {
        const arrOfArticles: IArticles = await response.json();
        setArticles(arrOfArticles.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {articles.map((article) => (
          <Col xs={12} key={article.id}>
            <h3>{article.title}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainArticle;
