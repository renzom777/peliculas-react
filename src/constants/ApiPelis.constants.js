
export const PELIS_API = {
    URL: "https://api.themoviedb.org",
    KEY: "fee23192e34c02534ccccac218f6e57e",
    traerPelisPorNombre: function(cadena) {
        return `${this.URL}/3/search/movie?api_key=${this.KEY}&query=${cadena}&language=es`
    },
    traerPeli: function(id) {
        return `${this.URL}/3/movie/${id}?api_key=${this.KEY}&language=es`;
    }
}