import Carousel from "./Carrousel";
import "../styles/place-sugestion.css";
import { useState } from "preact/hooks";
import mapaIcon from "../assets/mapa.png";

interface PlaceSugestionProps {
  places: any[];
  initialPlace: any;
}

export default function PlaceSugestion(props: PlaceSugestionProps) {
  const [randomPlace, setRandomPlace] = useState(props.initialPlace);

  const handleGetRandomPlace = () => {
    const randomPlace = props.places[Math.floor(Math.random() * props.places.length)];
    setRandomPlace(randomPlace);
  };

  const carouselImages =
    randomPlace.data.images?.map((image: any) =>
      typeof image === "string" ? image : image?.src || image,
    ) ?? [];

  return (
    <section className="place-sugestion-section">
      <div className="place-data-sugestion">
        <div className="place-data-col1">
          <div className="visita-label-container">
            <img
              src={mapaIcon.src}
              width={50}
              height={50} />
            <span className="visita-label"><strong>¿Qué tal si visitas este lugar?</strong></span>
          </div>
          <img
            className="sugest-image"
            src={randomPlace.data.hero.src}
            alt={randomPlace.data.name} />
          <div className="place-data-buttons">
            <button className="show-sugestion-button" onClick={handleGetRandomPlace}>Mostrar otra sugerencia</button>
            <a className="visit-page-button" href={`./${randomPlace.id}`}>Visitar página...</a>
          </div>
        </div>
        <div className="place-data-col2">
          <span className="letrero-madera"><strong>{`${randomPlace.data.name} (${randomPlace.data.category})`}</strong></span>
          <Carousel imagenes={carouselImages} placeName={randomPlace.data.name} />
        </div>
      </div>
    </section>
  );
}