import { Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "./components/Frase";

function App() {
  return (
    <Container className="text-center my-3">
      <section>
        <Image src="/src/assets/logoSimpsons.png" className="w-50" />
      </section>
      <section>
        <Frase />
      </section>

      <Button variant="warning">Obtener frase</Button>
    </Container>
  );
}

export default App;
