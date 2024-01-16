import { Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="text-center">
      <section>
        <Image src="/src/assets/logoSimpsons.png" className="w-50" />
      </section>
      <Button variant="warning">Obtener frase</Button>
    </Container>
  );
}

export default App;
