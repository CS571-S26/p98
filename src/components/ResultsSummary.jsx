import { Card } from "react-bootstrap";

function ResultsSummary({ totalTonnes }) {
  let rating, variant;
  if (totalTonnes < 6) {
    rating = "Below Average";
    variant = "success";
  } else if (totalTonnes < 16) {
    rating = "Average";
    variant = "warning";
  } else {
    rating = "Above Average";
    variant = "danger";
  }

  return (
    <Card border={variant} className="text-center mb-4">
      <Card.Body>
        <Card.Title as="h4">Your Estimated Annual Footprint</Card.Title>
        <p className="display-4 fw-bold my-3" style={{ color: `var(--bs-${variant})` }}>
          {totalTonnes.toFixed(1)}
        </p>
        <p className="text-muted mb-1">tonnes CO₂e per year</p>
        <span className={`badge bg-${variant} fs-6`}>{rating}</span>
        <p className="text-muted mt-3 mb-0">
          The global average is roughly 4 tonnes; the U.S. average is about 16 tonnes.
        </p>
      </Card.Body>
    </Card>
  );
}

export default ResultsSummary;
