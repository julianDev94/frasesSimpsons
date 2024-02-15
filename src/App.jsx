import { Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logoSimpsons.png';
import "./App.css";
import Frase from "./components/Frase";

function App() {
  return (
    <Container className="text-center my-3">
      <Image src={logo} className="w-50" />
      <Frase />
      <Button variant="warning">Obtener frase</Button>
    </Container>
  );
}

export default App;
