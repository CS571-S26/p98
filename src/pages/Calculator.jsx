import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalculatorForm from "../components/CalculatorForm";
import ResultsSummary from "../components/ResultsSummary";
import ResultsBreakdown from "../components/ResultsBreakdown";

const CO2_PER_GALLON = 0.00887; // tonnes CO2 per gallon of gasoline
const CO2_PER_KWH = 0.00042; // tonnes CO2 per kWh (U.S. avg)

const HEATING_TONNES = {
  natural_gas: 2.1,
  electric: 0.9,
  oil: 3.0,
  none: 0,
};

const DIET_TONNES = {
  vegan: 1.5,
  vegetarian: 1.7,
  average: 2.5,
  heavy_meat: 3.3,
};

const SHORT_FLIGHT_TONNES = 0.255;
const LONG_FLIGHT_TONNES = 1.65;

function computeBreakdown(data) {
  const gallonsPerYear = (data.milesPerWeek * 52) / data.mpg;
  const driving = gallonsPerYear * CO2_PER_GALLON;
  const flights =
    data.shortFlights * SHORT_FLIGHT_TONNES +
    data.longFlights * LONG_FLIGHT_TONNES;
  const electricity = data.electricityKwh * 12 * CO2_PER_KWH;
  const heating = HEATING_TONNES[data.heatingType] ?? 0;
  const diet = DIET_TONNES[data.diet] ?? 2.5;

  return { driving, flights, electricity, heating, diet };
}

function CalculatorPage() {
  const [results, setResults] = useState(null);

  function handleSubmit(data) {
    const breakdown = computeBreakdown(data);
    const totalTonnes = Object.values(breakdown).reduce((a, b) => a + b, 0);
    setResults({ breakdown, totalTonnes });
  }

  return (
    <Container className="py-4" style={{ maxWidth: "900px" }}>
      <h1 className="mb-2">Carbon Emissions Calculator</h1>
      <p className="text-muted mb-4">
        Estimate your annual carbon footprint based on your transportation,
        energy use, and diet.
      </p>

      <Row>
        <Col lg={results ? 6 : 12}>
          <CalculatorForm onSubmit={handleSubmit} />
        </Col>

        {results && (
          <Col lg={6}>
            <ResultsSummary totalTonnes={results.totalTonnes} />
            <ResultsBreakdown
              breakdown={results.breakdown}
              totalTonnes={results.totalTonnes}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default CalculatorPage;
