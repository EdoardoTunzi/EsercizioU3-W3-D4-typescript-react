import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IArticles, Result } from "../assets/interfaces/IArticles";

import { useNavigate } from "react-router-dom";

const MainArticle = () => {
  const [articles, setArticles] = useState<Result[]>([]);
  const navigate = useNavigate();

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
      <Row className="justify-content-center my-5">
        {articles.map((article) => (
          <Col xs={12} key={article.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.id}</Card.Subtitle>
                <Card.Link href="#" onClick={() => navigate(`/details/${article.id}`)}>
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainArticle;
