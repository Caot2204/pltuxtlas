import Carousel from "./Carrousel";
import "../styles/place-sugestion.css";
import { useState } from "preact/hooks";

interface PlaceSugestionProps {
  places: any[];
  initialPlace: any;
}

export default function PlaceSugestion( props: PlaceSugestionProps ) {
  const [ randomPlace, setRandomPlace ] = useState(props.initialPlace);

  const handleGetRandomPlace = () => {
    const randomPlace = props.places[Math.floor(Math.random() * props.places.length)].data;
    setRandomPlace(randomPlace);
  };

  const carouselImages =
  randomPlace.images?.map((image: any) =>
    typeof image === "string" ? image : image?.src || image,
  ) ?? [];

  return (
    <section className="place-sugestion-section">
      <div className="header-place-sugestion">
        <h2>¿Que tal si visitas este lugar?</h2>
        <button className="show-sugestion-button" onClick={handleGetRandomPlace}>Mostrar otra sugerencia</button>
      </div>
      <div className="place-data-sugestion">
        <img
          className="sugest-image"
          src={randomPlace.hero.src}
          alt={randomPlace.name} />
        <div className="place-data-col2">
          <h1>{randomPlace.name}</h1>
          <p><em>{randomPlace.category}</em></p>
          <Carousel imagenes={carouselImages} placeName={randomPlace.name}/>
        </div>
      </div>     
    </section>
  );
}