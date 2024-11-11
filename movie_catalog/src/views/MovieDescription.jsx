import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieDescription() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:3000/movies/${movieId}`); // URL da API para filme específico
                const data = await response.json();
                setMovie(data); // Armazena o filme no estado
            } catch (error) {
                console.error("Erro ao buscar filme:", error);
            }
        };

        fetchMovie();
    }, [movieId]);

    if (!movie) {
        return <p>Filme não encontrado</p>;
    }

    return (
        <div>
            <h1>{movie.movieTitle}</h1>
            <p>{movie.description}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Ano de Lançamento:</strong> {movie.releasingYear}</p>
            <p><strong>Visualizações:</strong> {movie.views}</p>
            <p><strong>Likes:</strong> {movie.likes}</p>
        </div>
    );
}
