import { Button, Container, Image, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logoSimpsons.png";
import "./App.css";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //mostrar spinner
      setMostrarSpinner(true);
      // console.log('esta funcion se llama en montaje');
      const consult = await fetch(
        `https://thesimpsonsquoteapi.glitch.me/quotes`
      );
      const datos = await consult.json();
      console.log(datos[0]);
      setPersonaje(datos[0]);
      //ocultar el spinner
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      //agregar un msj para el usuario final. Por ejemplo ventana sweetAlert
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-3">
      <Spinner animation="border" variant="danger"></Spinner>
    </div>
  ) : (
    <Frase personaje={personaje} />
  );

  return (
    <Container className="text-center my-3">
      <Image src={logo} alt="Imagen de titulo de simpsons" className="w-50" />
      {mostrarComponente}
      <Button variant="warning" onClick={consultarAPI}>
        Obtener frase
      </Button>
    </Container>
  );
}

export default App;
