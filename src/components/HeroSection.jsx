import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection({ imageSrc }) {
  return (
    <Container className="py-5">
      <Row className="align-items-center g-4">
        <Col md={6} lg={5}>
          <Image
            src={imageSrc}
            rounded
            fluid
            alt="Illustration of the earth with a waterfall and wind turbines"
          />
        </Col>
        <Col md={6} lg={7}>
          <h1 className="display-5 fw-bold">EcoTrack</h1>
          <p className="fs-5" style={{ color: "#495057" }}>
            Learn about global warming, discover your carbon footprint, and find
            ways to make a difference.
          </p>
          <Button as={Link} to="/calculator" variant="success" size="lg">
            Calculate Your Footprint
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
