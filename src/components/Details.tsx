import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Result } from "../assets/interfaces/IArticles";

const Details = () => {
  const [details, setDetails] = useState<Result | null>(null);
  const params = useParams();

  const fetchArtDetails = async () => {
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.artId}`);
      if (response.ok) {
        const article: Result = await response.json();
        setDetails(article);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArtDetails();
  }, [params.artId]);

  return (
    <Container>
      {details ? (
        <Card>
          <Card.Img variant="top" src={details.image_url} alt={details.title} />
          <Card.Body>
            <Card.Title>{details.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{details.news_site}</Card.Subtitle>
            <Card.Text>{details.summary}</Card.Text>
            <Card.Text>
              <strong>Published at:</strong> {new Date(details.published_at).toLocaleDateString()}
            </Card.Text>
            <Link to="/">Back to homepage</Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Article loading...</p>
      )}
    </Container>
  );
};
export default Details;
