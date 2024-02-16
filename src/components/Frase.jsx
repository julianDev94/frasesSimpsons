import { Image, Card } from "react-bootstrap";
// import ImagenSimpsons from "../assets/Moe_Szyslak.png"
const Frase = ({personaje}) => {
    return (
        <section className="my-3">
        <h2>
            {personaje.character}
        </h2>
        <hr />
        <Image src={personaje.image} alt={personaje.character}></Image>
        <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{personaje.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            "{personaje.character}" in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
        </section>
    );
};

export default Frase;