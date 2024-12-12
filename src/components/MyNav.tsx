import { Container, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Spaceflight News</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
