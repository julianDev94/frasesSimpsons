import { Image, Card } from "react-bootstrap";

const Frase = () => {
    return (
        <section className="my-3">
        <h2>
            Moe Szyslak
        </h2>
        <hr />
        <Image src="/src/assets/Moe_Szyslak.png"></Image>
        <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>"Shoplifting is a victimless crime, like punching someone in the dark."</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            "Nelson Muntz" in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
        </section>
    );
};

export default Frase;