import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} EcoTrack &mdash; Built by{" "}
          <a
            href="https://mmaeder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Max Maeder
          </a>
        </p>
        <p className="mb-0 small" style={{ color: "#adb5bd" }}>
          Helping you understand and reduce your carbon footprint.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
