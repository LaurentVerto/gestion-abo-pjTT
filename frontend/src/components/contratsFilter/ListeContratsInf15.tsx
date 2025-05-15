import React from "react";
import useContratServices from "../../services/ContratsServices";

function ListeContratsInf15() {

    const { myContracts} = useContratServices();

    return (
        <>
            {myContracts.some(contrat => {
                const day = new Date(contrat.datePrlvt).getDate();
                return day <= 15 && contrat.statusAbo === true;
            }) && (
                    <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 ">
                        <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>
                        {myContracts.filter(contrat => {
                            const day = new Date(contrat.datePrlvt).getDate();
                            return day <= 15 && contrat.statusAbo === true;
                        }).map(contrat => (
                            <li key={contrat.id} className="flex w-[90%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center" >
                                {contrat.type === "Abonnement" ? (
                                    <div className="ml-0 flex flex items-center gap-3 justify-between ">
                                        <img src={contrat.image} alt="logo_contract" className="w-10 h-10 rounded-lg"/>
                                        <div>

                                        <strong className="text-lg leading-none bold">{contrat.nom}</strong>
                                        <p className="font-sans text-xs font-light mt-1">{new Date(contrat.datePrlvt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="ml-0 flex flex items-center gap-3 justify-between ">
                                        <img src={contrat.image} alt="logo_contract" className="h-10 pb-1 w-10 object-contain rounded-lg "/>
                                        <div>
                                        <strong className="text-lg leading-none">{contrat.nom}</strong>
                                        <p className="text-sm font-sans font-light">Echéances restantes : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                    </div>
                                    </div>
                                )}

                                <div className="flex flex-col justify-between leading-none items-end">
                                    
                                    <p>{contrat.prix} €</p>
                                </div>
                            </li>
                        ))}
                        <div className="total w-[100%] min-w-[390px] h-8 text-white flex items-center ml-5">
                            <p className="text-sm font-sans">Total :
                                <span className="font-bold text-lg ml-2">


                                    {myContracts
                                        .filter((contrat) => new Date(contrat.datePrlvt).getDate() <= 15 && contrat.statusAbo === true)  // Filtrer les contrats
                                        .reduce((acc, contrat) => acc + (parseFloat(contrat.prix.toString()) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                                        .toFixed(2)} €
                                </span>
                            </p>
                        </div>



                    </ul>
                )}
        </>
    )
}

export default ListeContratsInf15;