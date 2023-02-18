import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Card = ({ p, juego, busq }) => {
  var vinculoImagen = (p) => {
    return `https://image.tmdb.org/t/p/original/${p.poster_path}`;
  };

  const [puntuacion, setPuntuacion] = useState(0);

  const valoraciones = {
    0: "Sin votación",
    1: "Parece infumable",
    2: "Tiene una pinta malísima",
    3: "Prefiero ver cómo crece el pasto",
    4: "Capaz zafa",
    5: "Le daría una oportunidad",
    6: "Para un domingo a la siesta está",
    7: "Interesante che",
    8: "La hubiera ido a ver al cine",
    9: "Hasta la compraría original",
    10: "Masterpiece vibes",
  };

  const colores = {
    0: "black",
    1: "red",
    2: "red",
    3: "red",
    4: "blue",
    5: "blue",
    6: "blue",
    7: "green",
    8: "green",
    9: "green",
    10: "green",
  };

  const [color, setColor] = useState("");

  const [valoracion, setValoracion] = useState("");

  const handlePuntuacionSuma = () => {
    setPuntuacion(puntuacion + 1);
  };

  const handlePuntuacionResta = () => {
    setPuntuacion(puntuacion - 1);
  };

  const [puntuado, setPuntuado] = useState(false);

  useEffect(() => {
    setValoracion(valoraciones[puntuacion]);
    setColor(colores[puntuacion]);
  }, [puntuacion]);

  const handlePuntuado = () => {
    setPuntuado(true);
  };

  return (
    <div className="card-group">
      <div className="card">
        <img
          height="60%"
          src={vinculoImagen(p)}
          className="card-img-top"
          alt="poster pelicula"
        ></img>
        <div className="card-body" style={{ textAlign: "center" }}>
          <br />
          <h5 className="card-text" style={{ fontWeight: "bold" }}>
            {p.original_title}
          </h5>
          <p style={{ fontSize: 13 }}>{p.overview}</p>
          {juego && (
            <div style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center" }}>
                <br />
                <h6>Tu puntuación</h6>
                <br/>
                <h4 style={{ color: color, fontWeight: "bold" }}>{puntuacion}</h4>
                {!puntuado && (
                  <div style={{ textAlign: "center" }}>
                    <button
                      disabled={puntuacion == 0}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handlePuntuacionResta}
                    >
                      -
                    </button>
                    <button
                      disabled={puntuacion == 10}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handlePuntuacionSuma}
                    >
                      +
                    </button>
                    <br />
                    <br />
                    <button
                      type="submit"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={handlePuntuado}
                    >
                      Puntuar
                    </button>
                  </div>
                )}
              </div>
              {puntuado && (
                <div style={{ textAlign: "center", color: color, fontWeight: "bold" }}>
                  <h3>{valoracion}</h3>
                </div>
              )}
            </div>
          )}
          {!juego && (
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={`/details/${busq}/${p.id}`} className="nav-link px-2 text-secondary">Ver</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
