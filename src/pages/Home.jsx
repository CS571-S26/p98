import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import illustration from "../assets/home-illustration.png";

function HomePage() {
  return (
    <>
      <HeroSection imageSrc={illustration} />

      <Container className="pb-5">
        <h2 className="mb-4">Explore</h2>
        <Row className="g-4">
          <Col sm={12} md={4}>
            <FeatureCard
              title="Carbon Calculator"
              description="Estimate your annual carbon footprint based on your travel, energy use, and diet."
              linkTo="/calculator"
              linkLabel="Get Started"
              variant="success"
            />
          </Col>
          <Col sm={12} md={4}>
            <FeatureCard
              title="Global Warming"
              description="Understand what global warming is, its causes, and what we can do about it."
              linkTo="/articles/global-warming"
              linkLabel="Read Article"
              variant="outline-primary"
            />
          </Col>
          <Col sm={12} md={4}>
            <FeatureCard
              title="Carbon Footprint"
              description="Learn what a carbon footprint is and practical ways to reduce yours."
              linkTo="/articles/carbon-footprint"
              linkLabel="Read Article"
              variant="outline-primary"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
