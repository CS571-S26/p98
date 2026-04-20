import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const DEFAULTS = {
  milesPerWeek: 0,
  mpg: 25,
  shortFlights: 0,
  longFlights: 0,
  electricityKwh: 900,
  heatingType: "natural_gas",
  diet: "average",
};

function CalculatorForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: DEFAULTS });

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Card className="mb-4">
        <Card.Header as="h5">Transportation</Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Group controlId="milesPerWeek">
                <Form.Label>Miles driven per week</Form.Label>
                <Form.Control
                  type="number"
                  isInvalid={!!errors.milesPerWeek}
                  {...register("milesPerWeek", {
                    valueAsNumber: true,
                    min: { value: 0, message: "Must be 0 or more" },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.milesPerWeek?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="mpg">
                <Form.Label>Vehicle fuel economy (MPG)</Form.Label>
                <Form.Control
                  type="number"
                  isInvalid={!!errors.mpg}
                  {...register("mpg", {
                    valueAsNumber: true,
                    min: { value: 1, message: "Must be at least 1" },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mpg?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="shortFlights">
                <Form.Label>Short-haul flights per year</Form.Label>
                <Form.Control
                  type="number"
                  isInvalid={!!errors.shortFlights}
                  {...register("shortFlights", {
                    valueAsNumber: true,
                    min: { value: 0, message: "Must be 0 or more" },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.shortFlights?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="longFlights">
                <Form.Label>Long-haul flights per year</Form.Label>
                <Form.Control
                  type="number"
                  isInvalid={!!errors.longFlights}
                  {...register("longFlights", {
                    valueAsNumber: true,
                    min: { value: 0, message: "Must be 0 or more" },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.longFlights?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">Home Energy</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="electricityKwh">
                <Form.Label>Electricity usage (kWh / month)</Form.Label>
                <Form.Control
                  type="number"
                  isInvalid={!!errors.electricityKwh}
                  {...register("electricityKwh", {
                    valueAsNumber: true,
                    min: { value: 0, message: "Must be 0 or more" },
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.electricityKwh?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="heatingType">
                <Form.Label>Primary heating source</Form.Label>
                <Form.Select {...register("heatingType")}>
                  <option value="natural_gas">Natural Gas</option>
                  <option value="electric">Electric</option>
                  <option value="oil">Heating Oil</option>
                  <option value="none">No Heating</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h5">Diet</Card.Header>
        <Card.Body>
          <Form.Group controlId="diet">
            <Form.Label>How would you describe your diet?</Form.Label>
            <Form.Select {...register("diet")}>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="average">Average (some meat)</option>
              <option value="heavy_meat">Heavy meat eater</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>

      <div className="d-grid">
        <Button variant="success" type="submit" size="lg">
          Calculate My Footprint
        </Button>
      </div>
    </Form>
  );
}

export default CalculatorForm;
