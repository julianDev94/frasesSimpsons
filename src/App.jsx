import { Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './assets/logoSimpsons.png';
import "./App.css";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
const [personaje, setPersonaje] = useState({}); 


  useEffect(()=>{
    consultarAPI();
  }, []);

  const consultarAPI = async () =>{
    // console.log('esta funcion se llama en montaje');
    const consult = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`);
    const datos = await consult.json();
    console.log(datos[0]);
    setPersonaje(datos[0]); 
  }

  return (
    <Container className="text-center my-3">
      <Image src={logo} alt="Imagen de titulo de simpsons" className="w-50" />
      <Frase personaje={personaje} />
      <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
    </Container>
  );
}

export default App;
