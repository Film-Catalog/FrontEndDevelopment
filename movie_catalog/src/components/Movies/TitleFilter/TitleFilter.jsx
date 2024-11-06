import { useState } from "react";
import downPointer from "/down.svg";
import upPointer from "/up.svg";

export default function TitleFilter(props) {
    const [pointer, setPointer] = useState(downPointer);

    const handleToggle = () => {
        props.onToggle(); // Chama a função para abrir/fechar o filtro
        setPointer((prevPointer) => (prevPointer === downPointer ? upPointer : downPointer));
    };

    const options = {
        "YEAR": ["2023", "2022", "2021", "2020"],
        "RATING": ["5 Estrelas", "4 Estrelas", "3 Estrelas", "2 Estrelas", "1 Estrelas"],
        "GENDER": ["Ação", "Comédia", "Drama", "Romance"],
    };

    return (
        <div className="relative">
            <div 
                className="flex items-center text-textPrimary cursor-pointer
                           bg-transparent hover:bg-hover w-auto h-8 p-4
                           border-2 border-accent rounded-lg"
                onClick={handleToggle}
            >
                <p>{props.title}</p>
                <img className="w-auto h-4 font-bold" src={pointer} alt={props.title} />
            </div>

            {props.isOpen && (
                <div className="absolute top-10 left-0 w-40 bg-background border border-accent rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                        {options[props.title]?.map((option, index) => (
                            <li 
                                key={index} 
                                className="px-4 py-2 hover:bg-hover cursor-pointer text-textPrimary"
                                onClick={() => {
                                    console.log(`Selecionado: ${option}`);
                                    props.onToggle(); // Fecha o dropdown após selecionar uma opção
                                    setPointer(downPointer); // Retorna a seta para baixo
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}