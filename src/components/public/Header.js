import React, {useEffect, useState} from "react";
import CardsProducer from "./CardsProducer";
import { useParams } from 'react-router-dom';

const Header = () => {

  var {busq} = useParams();

  if (busq==undefined) {
    busq="";
  }

  const [busqueda, setBusqueda] = useState(busq);

  const [menosDe4, setMenosDe4] = useState(true);

  const [indefinido, setIndefinido] = useState(true);

  const [busquedaFinal, setBusquedaFinal] = useState(busq);

  const handleChanges = (e) => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    setMenosDe4(busqueda.length < 4 && busqueda.trim() != "");
    setIndefinido(busqueda.trim() === "");
  }, [busqueda]);

  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <h1>Buscá pelis</h1>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleChanges}
              />
            </form>

            <div className="text-end">
              <button
                disabled={indefinido || menosDe4}
                type="submit"
                className="btn btn-outline-light me-2"
                onClick={() => setBusquedaFinal(busqueda)}
              >
                Buscar
              </button>
            </div>
          </div>
          {menosDe4 && (
            <div style={{ display: "block" }} className="text-end">
              <br />
              <p style={{ color: "red" }}>
                La búsqueda debe contener al menos 4 caracteres
              </p>
            </div>
          )}
        </div>
      </header>

      <div>
        <CardsProducer busquedaFinal={busquedaFinal}/>
      </div>
    </div>
  );
};

export default Header;
