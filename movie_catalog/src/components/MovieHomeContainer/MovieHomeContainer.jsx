import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '/eye.svg';
import heart from '/heart.svg';
import view from '/view.svg';

export default function MovieHomeContainer({ selectedGender }) {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    // Função para buscar filmes da API
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

    // Função para filtrar filmes com base no gênero selecionado
    useEffect(() => {
        if (selectedGender) {
            const filtered = movies.filter(movie => {
                // Verifica se o campo 'genre' existe e é uma string válida
                if (!movie.genre) return false;
                
                // Separa os gêneros da string por vírgula e ignora espaços extras
                const genres = movie.genre.split(',').map(g => g.trim().toLowerCase());

                // Verifica se algum gênero do filme corresponde ao gênero selecionado
                return genres.some(genre => genre === selectedGender.toLowerCase());
            });
            setFilteredMovies(filtered);
        } else {
            setFilteredMovies(movies); // Se não houver filtro, mostrar todos os filmes
        }
    }, [selectedGender, movies]);

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
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <div key={index} onClick={() => handleMovieClick(movie.id)} className="flex-shrink-0 cursor-pointer">
                            <img 
                                className="w-56 h-80 object-cover rounded-md border-2 border-transparent hover:border-accent" 
                                src={movie.image}
                                alt={movie.movieTitle} 
                            />

                            <div className='flex justify-center gap-4 pt-1'>
                                <div className='flex gap-1'>
                                    <img src={eye} className='w-3'/> 
                                    <p className='flex items-center justify-center text-textSecondary text-center text-[0.7rem] h-full'>{movie.rating}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <img src={view} className='w-3'/>
                                    <p className='flex items-center justify-center text-textSecondary text-center text-[0.7rem] h-full'>{movie.views}</p>
                                </div>
                                <div className='flex gap-1'>
                                    <img src={heart} className='w-3'/>
                                    <p className='flex items-center justify-center text-textSecondary text-center text-[0.7rem] h-full'>{movie.likes}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-white">Nenhum filme encontrado para esse gênero.</p>
                )}
            </div>

            <button onClick={scrollRight} className="absolute right-0 z-10 p-2 text-white text-4xl rounded-full">
                {">"}
            </button>
        </div>
    );
}
