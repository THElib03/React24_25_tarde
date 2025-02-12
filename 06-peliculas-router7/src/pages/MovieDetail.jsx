import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchMovieDetails, getImageUrl } from "../services/tmdb";
import { PacmanLoader } from 'react-spinners';

const MovieDetail = () => {
    const { id } = useParams();
    const { data, loading, errors } = useFetch(() => fetchMovieDetails(id), [id]);

    if(loading){
        return <PacmanLoader />
    }

    return(
        <article className=" max-w-5xl mx-auto">
            <header>
            <img src={getImageUrl(data?.backdrop_path)} alt={`${data?.title} movie wide poster`} className=" w-full h-full object-cover rounded" />
                <div className=" absolute inset-0 bg-gradient-to-t from-black">
                    <div className="absolute bottom-2 text-white p-6">
                        <h1 className=" text-4xl font-bold">{data?.title}</h1>
                    </div>
                </div>
            </header>

            <div className=" grid md:grid-cols-3 gap-8">
                <div>
                    <img src={getImageUrl(data?.poster_path)} alt={`${data?.title} movie poster`} className=" w-full rounded-lg shadow-amber-100"/>
                </div>

                <div>
                    <span className=" font-bold mt-4">
                        {data?.release_date.split('-')[0]}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default MovieDetail;
