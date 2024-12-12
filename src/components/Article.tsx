import { Card } from "react-bootstrap";
import { Result } from "../assets/interfaces/IArticles";
import { useNavigate } from "react-router-dom";

interface SingleArticle {
  article: Result;
}

const Article = ({ article }: SingleArticle) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{article.id}</Card.Subtitle>
        <Card.Link href="#" onClick={() => navigate(`/details/${article.id}`)}>
          Read more
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
export default Article;
