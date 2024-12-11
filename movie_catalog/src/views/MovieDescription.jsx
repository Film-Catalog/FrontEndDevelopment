import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BackgroundPage from '../components/BackgroundPage/BackgroundPage';
import eye from '/eye.svg'
import heart from '/heart.svg'
import view from '/view.svg'

export default function MovieDescription() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:3000/movies/${movieId}`); // URL da API para filme específico
                const data = await response.json();
                console.log(data);
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
        <BackgroundPage>
            <div className='w-2/3 mx-auto flex gap-14 pt-12'>
                <div>
                    <div className='grid gap-10'>
                            <img className="w-96 h-auto object-cover rounded-md border-2 border-transparent" src={movie.image}/>
                    </div>
                    <div className='flex justify-center gap-7 pt-5'>
                        <div className='flex gap-1'>
                            <img src={eye} className='w-6'/> 
                            <p className='text-textSecondary'>{movie.rating}</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={view} className='w-6'/>
                            <p className='text-textSecondary'>{movie.views}</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={heart} className='w-6'/>
                            <p className='text-textSecondary'>{movie.likes}</p>
                        </div>
                    </div>
                </div>
                    <div>
                        <h1 className="text-4xl text-textPrimary font-bold">{movie.movieTitle}
                            <u className='ml-5 text-2xl cursor-pointer text-textSecondary hover:text-hover '>{movie.releasingYear}</u>
                        </h1>
                        <p className="text-sm text-textSecondary my-4">{movie.titleDescription}</p>
                        <p className="text-2xl text-textSecondary my-4">{movie.description}</p>

                        <div>
                            <h1 className='text-3xl text-textPrimary font-bold pt-8'>Género</h1>
                            <p className="text-2x1 text-textSecondary">{movie.genre}</p>
                        </div>
                    </div>
                    
            </div>
        </BackgroundPage>
    );
}
