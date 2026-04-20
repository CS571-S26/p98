import { Card, ProgressBar, Stack } from "react-bootstrap";

const CATEGORY_LABELS = {
  driving: "Driving",
  flights: "Flights",
  electricity: "Electricity",
  heating: "Heating",
  diet: "Diet",
};

const CATEGORY_VARIANTS = {
  driving: "primary",
  flights: "info",
  electricity: "warning",
  heating: "danger",
  diet: "success",
};

function ResultsBreakdown({ breakdown, totalTonnes }) {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Breakdown by Category</Card.Header>
      <Card.Body>
        <Stack gap={3}>
          {Object.entries(breakdown).map(([key, tonnes]) => {
            const pct = totalTonnes > 0 ? (tonnes / totalTonnes) * 100 : 0;
            return (
              <div key={key}>
                <div className="d-flex justify-content-between mb-1">
                  <span>{CATEGORY_LABELS[key]}</span>
                  <span className="text-muted">
                    {tonnes.toFixed(2)} t &middot; {pct.toFixed(0)}%
                  </span>
                </div>
                <ProgressBar
                  now={pct}
                  variant={CATEGORY_VARIANTS[key]}
                  style={{ height: "0.75rem" }}
                />
              </div>
            );
          })}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ResultsBreakdown;
