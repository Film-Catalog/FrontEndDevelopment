import { useRef } from 'react';
import MovieHome from './MovieHome';
import Avatar from '/movies/Avatar2.jpg';
import bladeRunner from '/movies/bladeRunner.webp';
import clubeDaLuta from '/movies/clubeDaLuta.webp';
import coracaoDeFerro from '/movies/coracaoDeFerro.webp';
import fallout from '/movies/fallout.jpg';
import halo from '/movies/halo.jpg';
import senhorDosAneis from '/movies/senhorDosAneis.jpg';

export default function MovieHomeContainer() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="relative flex items-center">
            {/* Botão de Navegação para a Esquerda */}
            <button 
                onClick={scrollLeft} 
                className="absolute left-0 z-10 p-1 text-white text-4xl rounded-full"
            >
                {"<"}
            </button>

            {/* Contêiner do Carrossel */}
            <div 
                ref={carouselRef} 
                className="flex overflow-x-scroll space-x-4 px-14 scrollbar-auto"
            >
                <MovieHome img={Avatar} />
                <MovieHome img={bladeRunner} />
                <MovieHome img={clubeDaLuta} />
                <MovieHome img={coracaoDeFerro} />
                <MovieHome img={fallout} />
                <MovieHome img={halo} />
                <MovieHome img={senhorDosAneis} />
            </div>

            {/* Botão de Navegação para a Direita */}
            <button 
                onClick={scrollRight} 
                className="absolute right-0 z-10 p-2 text-white text-4xl rounded-full"
            >
                {">"}
            </button>
        </div>
    );
}
