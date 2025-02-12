const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE = import.meta.env.VITE_BASE_IMAGE;

export const SIZE = {
    POSTER: 'w500',
    ORIGINAL: "original",
}

const fetchFromApi = async (endPoint, options = {}) => {
    try{
        const movieResponse = await fetch(`${BASE_URL}${endPoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(options)}`);
        if(!movieResponse.ok){
            throw new Error('There was an error while fetching info, please try again later.');
        }

        return await movieResponse.json();
    }
    catch(error){
        console.error('Failed to fetch data: ', error);
        throw error;
    }
}

export const fetchPopularMovies = async () => {
    return await fetchFromApi('/movie/popular');
}

export const fetchMovieDetails = async (movieId) => {
    return await fetchFromApi(`/movie/${movieId}`);
}

export const getImageUrl = (path, size = SIZE.POSTER) => {
    return `${BASE_IMAGE}/${size}${path}`;
  };

export const fetchMovieVideos = async (movieId) => {
    return await fetchFromApi(`/movie/${movieId}/videos`);
}