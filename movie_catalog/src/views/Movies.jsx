import { useState } from "react";
import TitleFilter from "../components/TitleFilter/TitleFilter";
import BackgroundPage from "../components/BackgroundPage/BackgroundPage";
import MovieHomeContainer from "../components/MovieHomeContainer";

export default function Movies() {
    const [openFilter, setOpenFilter] = useState(null); // Estado para rastrear o filtro aberto
    const [selectedGender, setSelectedGender] = useState(null); // Estado para rastrear o gênero selecionado

    const handleOpenFilter = (filterName) => {
        setOpenFilter((prev) => (prev === filterName ? null : filterName));
    };

    // Função para atualizar o gênero selecionado
    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <BackgroundPage>
            <div className="flex justify-self-center items-center gap-6 py-10">
                <p className="text-textSecondary">BROWSE BY</p>
                <div className="flex justify-center items-center gap-4">
                    {/* <TitleFilter
                        title="RATING"
                        isOpen={openFilter === "RATING"}
                        onToggle={() => handleOpenFilter("RATING")}
                    /> */}
                    <TitleFilter
                        title="GENDER"
                        isOpen={openFilter === "GENDER"}
                        onToggle={() => handleOpenFilter("GENDER")}
                        onGenderSelect={handleGenderChange} // Passa a função para o filtro
                    />
                </div>
            </div>

            <MovieHomeContainer selectedGender={selectedGender} /> {/* Passa o estado de gênero selecionado */}
        </BackgroundPage>
    );
}
