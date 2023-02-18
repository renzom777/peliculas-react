import React, { useEffect, useState } from "react";
import {Card} from "../public/Card";
import PelisService from "../../services/Pelis.service";

const CardsProducer = ({ busquedaFinal }) => {

  const [jugar, setJugar] = useState(false);

  const handleJugar = () => {
    setJugar(true);
  };

  const handleCancelarJuego = () => {
    setJugar(false);
  };

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    PelisService.getMovies(busquedaFinal).then((data) => 
      setPeliculas(data.results));
  }, [busquedaFinal]);

  const listaCartas = peliculas.map( (p) => <Card p={p} key={p.id} juego={jugar} busq={busquedaFinal}/>);

  return (
    <div>
      {busquedaFinal == "" && (
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                Buscá películas almacenadas en The Movie Database
                (themoviedb.org) y juzgalas por su portada
              </h1>
              <br />
              <p className="lead text-muted">
                Animate a ingresar una palabra en el buscador superior y mirá
                algunas de las películas que están relacionadas con
                tu búsqueda.<br/><br/>Luego ponete prejuicioso por un ratito y puntualas según la pinta que tengan, o mirá su detalle y lo que otras personas opinaron
              </p>
            </div>
          </div>
        </section>
      )}

      <div className="album py-5 bg-light">
        <div className="container">
          {!busquedaFinal == "" && (
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleJugar}
              >
                Puntuar
              </button>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancelarJuego}
              >
                Ver detalles
              </button>
            </div>
          )}
          <br />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {listaCartas}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProducer;
