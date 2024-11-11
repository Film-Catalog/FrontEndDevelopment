import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieHomeContainer() {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:3000/movies');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };
        
        fetchMovies();
    }, []);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`);
    };

    return (
        <div className="relative flex items-center">
            <button onClick={scrollLeft} className="absolute left-0 z-10 p-1 text-white text-4xl rounded-full">
                {"<"}
            </button>

            <div ref={carouselRef} className="flex overflow-x-scroll space-x-4 px-14 scrollbar-auto">
                {movies.map((movie, index) => (
                    <div key={index} onClick={() => handleMovieClick(movie.id)} className="flex-shrink-0 cursor-pointer">
                        <img 
                            className="w-56 h-80 object-cover rounded-md border-2 border-transparent hover:border-accent" 
                            src={movie.img || '/bladeRunner.webp'} // Use uma imagem padrão caso `img` não esteja definido
                            // alt={movie.movieTitle} 
                        />
                        <p>{movie.movieTitle}</p>
                    </div>
                ))}
            </div>

            <button onClick={scrollRight} className="absolute right-0 z-10 p-2 text-white text-4xl rounded-full">
                {">"}
            </button>
        </div>
    );
}
