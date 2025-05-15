import React, { useState } from "react";
import useContratServices from "../../services/ContratsServices";
import { useTime } from "framer-motion";

function ListeSemaine() {
    

    const { myContracts } = useContratServices();

    // Fonction pour obtenir le numéro de semaine ISO
    function getWeek(date: Date): number {
        const target = new Date(date);
        target.setHours(0, 0, 0, 0);
        target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));
        const firstThursday = new Date(target.getFullYear(), 0, 4);
        firstThursday.setDate(
            firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7)
        );
        const diff = target.getTime() - firstThursday.getTime();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        return 1 + Math.floor(diff / oneWeek);
    }

    const semaineCourante = getWeek(new Date());

    const [selectedWeek, setSelectedWeek] = useState(semaineCourante);

    const contratsActifs = myContracts.filter((contrat) => {
        const contratWeek = getWeek(new Date(contrat.datePrlvt))

        return contratWeek === selectedWeek && contrat.statusAbo === true;
    });    

    const total = contratsActifs
        .reduce((acc, contrat) => {
            const prix = parseFloat(String(contrat.prix).replace(",", "."));
            return acc + (isNaN(prix) ? 0 : prix);
        }, 0)
        .toFixed(2);

    const handleSelectWeek = (semaineCourante: number) => {
        setSelectedWeek(semaineCourante);
    };

    return (
        <>
            <div className="w-full flex justify-center mt-5 ">
                <ul className="flex items-center justify-center gap-4 ">
                    {/* <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chevron-left-icon lucide-chevron-left"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </li> */}

                    {/* ici on doit faire en sorte que les numero de semaine s'incrémente automatiquement le prmeier sera la semaine en cours et le reste les semaine suivante */}

                    <li
                        onClick={() => handleSelectWeek(semaineCourante-1)}
                        className={` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm hover:cursor-pointer  ${
                            selectedWeek === semaineCourante-1
                                ? "bg-[#009CEA]"
                                : "bg-none"
                        }`}
                    >
                        {semaineCourante-1}
                    </li>

                    <li
                        onClick={() => handleSelectWeek(semaineCourante )}
                        className={` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] hover:cursor-pointer rounded-sm ${
                            selectedWeek === semaineCourante
                                ? "bg-[#009CEA]"
                                : "bg-none"
                        }`}
                    >
                        {semaineCourante }{" "}
                    </li>
                    <li
                        onClick={() => handleSelectWeek(semaineCourante + 1)}
                        className={` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm hover:cursor-pointer  ${
                            selectedWeek === semaineCourante + 1
                                ? "bg-[#009CEA]"
                                : "bg-none"
                        }`}
                    >
                        {semaineCourante + 1}
                    </li>
                    <li
                        onClick={() => handleSelectWeek(semaineCourante + 2)}
                        className={` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm hover:cursor-pointer  ${
                            selectedWeek === semaineCourante + 2
                                ? "bg-[#009CEA]"
                                : "bg-none"
                        }`}
                    >
                        {semaineCourante + 2}
                    </li>
                    <li
                        onClick={() => handleSelectWeek(semaineCourante + 3)}
                        className={` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm hover:cursor-pointer  ${
                            selectedWeek === semaineCourante + 3
                                ? "bg-[#009CEA]"
                                : "bg-none"
                        }`}
                    >
                        {semaineCourante + 3}
                    </li>

                    {/* <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-chevron-right-icon lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </li> */}
                </ul>
            </div>

            {contratsActifs.length > 0 && (
                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 ">
                    <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>

                    {contratsActifs.map((contrat) => (
                        <li
                            key={contrat.id}
                            className="flex w-[90%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center"
                        >
                            {contrat.type === "Abonnement" ? (
                                <div className="ml-0 flex flex items-center gap-3 justify-between ">
                                    <img
                                        src={contrat.image}
                                        alt="logo_contract"
                                        className="w-10 h-10 rounded-lg"
                                    />
                                    <div>
                                        <strong className="text-lg leading-none bold">
                                            {contrat.nom}
                                        </strong>
                                        <p className="font-sans text-xs font-light mt-1">
                                            {new Date(
                                                contrat.datePrlvt
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="ml-0 flex flex items-center gap-3 justify-between ">
                                    <img
                                        src={contrat.image}
                                        alt="logo_contract"
                                        className="h-10 pb-1 w-10 object-contain rounded-lg "
                                    />
                                    <div>
                                        <strong className="text-lg leading-none">
                                            {contrat.nom}
                                        </strong>
                                        <p className="font-sans text-xs font-light mt-1">
                                            {new Date(
                                                contrat.datePrlvt
                                            ).toLocaleDateString()}
                                        </p>
                                        <p className="text-xs font-sans font-light">
                                            Échéances restantes :
                                            <span className="text-sm font-bold">
                                                {" "}
                                                {contrat.echeance}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col justify-between leading-none items-end">
                                <p>{contrat.prix} €</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="total w-[100%] min-w-[390px] h-8 text-white flex flex-col items-center absolute bottom-25 justify-center">
                <p className="text-sm font-sans md:text-lg ">
                    Total :
                    
                </p>
                <span className="font-bold text-lg md:text-2xl ">{total} €</span>
            </div>
        </>
    );
}

export default ListeSemaine;
