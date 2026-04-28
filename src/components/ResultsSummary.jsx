import { Card } from "react-bootstrap";

const RATINGS = {
  low: { label: "Below Average", bg: "success" },
  mid: { label: "Average", bg: "warning" },
  high: { label: "Above Average", bg: "danger" },
};

function ResultsSummary({ totalTonnes }) {
  let tier;
  if (totalTonnes < 6) tier = "low";
  else if (totalTonnes < 16) tier = "mid";
  else tier = "high";

  const { label, bg } = RATINGS[tier];

  return (
    <Card className="text-center mb-4">
      <Card.Body>
        <h2 className="fs-4">Your Estimated Annual Footprint</h2>
        <p className="display-4 fw-bold my-3">{totalTonnes.toFixed(1)}</p>
        <p className="mb-1" style={{ color: "#495057" }}>
          tonnes CO&#x2082;e per year
        </p>
        <span className={`badge bg-${bg} fs-6`}>{label}</span>
        <p className="mt-3 mb-0" style={{ color: "#495057" }}>
          The global average is roughly 4 tonnes; the U.S. average is about 16
          tonnes.
        </p>
      </Card.Body>
    </Card>
  );
}

export default ResultsSummary;
