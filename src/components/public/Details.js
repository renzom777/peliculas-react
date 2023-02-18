import React, {useState, useEffect} from "react";
import { Link, useLocation, useParams } from 'react-router-dom'
import PelisService from "../../services/Pelis.service";

const Details = () => {

    var vinculoImagen = (p) => {
        return `https://image.tmdb.org/t/p/original/${p.poster_path}`;
      };

  const [pelicula, setPelicula] = useState({});

  const { id, busq } = useParams();

  useEffect(() => {
    PelisService.getMovie(id)
    .then((data) => setPelicula(data))
  }, [id]);

  const detailCard = {
    width: '80%',
    margin: 'auto',
    background: 'white'
   }

  return (<div>
    <div className="card mb-3" style={{'background': 'gainsboro'}}>
    <div className="row g-0 mt-4 mb-4" style={detailCard}>
      <div className="col-md-3">
        <img src={vinculoImagen(pelicula)} className="img-fluid rounded-start imgDetalle" alt="img del personaje"/>
      </div>
      <div className="col-md-8 detallePersonaje">
        <div className="card-body">
          <h3 className="card-title">{pelicula.original_title}</h3>
          <br/>
          <h5 className="card-text"><small className=""> {pelicula.overview}</small></h5>
          <br/>
          <h6 className="card-text"><small className=""> Fecha de lanzamiento: {pelicula.release_date}</small></h6>
          <h6 className="card-text"><small className=""> Popularidad en TMDB: {pelicula.popularity}</small></h6>
          <h6 className="card-text"><small className=""> Cantidad de votos en TMDB: {pelicula.vote_count}</small></h6>
          <h6 className="card-text"><small className=""> Puntuación promedio en TMDB: {pelicula.vote_average}</small></h6>
        </div>
        <div className="btn-group" style={{'marginLeft': '15px'}}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={`/${busq}`} className="nav-link px-2 text-success">Volver</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
  </div>);
};

export default Details;
