import { PELIS_API } from "../constants/ApiPelis.constants";

class PelisService {

    async getMovies(cadena) {
        const response = await fetch(PELIS_API.traerPelisPorNombre(cadena));
        return response.json();
    }
    async getMovie(id) {
        const response = await fetch(PELIS_API.traerPeli(id));
        return response.json();
    }

}

export default new PelisService()