import { useState } from "react";
import TitleFilter from "../components/Movies/TitleFilter/TitleFilter";
import BackgroundPage from "../components/BackgroundPage/BackgroundPage";
import MovieHomeContainer from "../components/MovieHomeContainer/MovieHomeContainer";

export default function Movies() {
    const [openFilter, setOpenFilter] = useState(null); // Estado para rastrear o filtro aberto

    const handleOpenFilter = (filterName) => {
        setOpenFilter((prev) => (prev === filterName ? null : filterName));
    };

    return (
        <BackgroundPage>
            <div className="flex justify-self-center items-center gap-6 py-10">
                <p className="text-textSecondary">BROWSE BY</p>
                <div className="flex justify-center items-center gap-4">
                    <TitleFilter 
                        title="YEAR" 
                        isOpen={openFilter === "YEAR"} 
                        onToggle={() => handleOpenFilter("YEAR")}
                    />
                    <TitleFilter 
                        title="RATING" 
                        isOpen={openFilter === "RATING"} 
                        onToggle={() => handleOpenFilter("RATING")}
                    />
                    <TitleFilter 
                        title="GENDER" 
                        isOpen={openFilter === "GENDER"} 
                        onToggle={() => handleOpenFilter("GENDER")}
                    />
                </div>
            </div>

            <MovieHomeContainer />
        </BackgroundPage>
    );
}
