import { Col, Container, Row, Image } from "react-bootstrap";
import illustration from "../assets/home-illustration.png";

function HomePage() {
  return (
    <Container className="py-3">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Image src={illustration} rounded width="100%" />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <h1>EcoTrack</h1>
          <p className="fs-4">Learn all about global warming and how you can help!</p>
          <p>
            Select a option from the navigation bar to continue.
            Made by <a target="_blank" href="https://mmaeder.com">Max Maeder</a>.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;