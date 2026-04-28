import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeatureCard({ title, description, linkTo, linkLabel, variant }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="fs-5">
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#495057" }}>{description}</Card.Text>
        <Button
          as={Link}
          to={linkTo}
          variant={variant ?? "outline-success"}
          className="mt-auto"
        >
          {linkLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
