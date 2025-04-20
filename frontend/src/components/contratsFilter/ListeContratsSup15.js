import useContratServices from "../../services/ContratsServices";

function ListeContratsSup15() {

    const {myContracts, setMyContracts} = useContratServices();

    return (
        <>
            {myContracts.some(contrat => {
                const day = new Date(contrat.datePrlvt).getDate();
                return day >= 15 && contrat.statusAbo === true;
            }) && (
                    <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 ">
                        <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>
                        {myContracts.filter(contrat => {
                            const day = new Date(contrat.datePrlvt).getDate();
                            return day >= 15 && contrat.statusAbo === true;
                        }).map(contrat => (
                            <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                                {contrat.type === "Abonnement" ? (
                                    <div className="ml-3 flex flex-col justify-between ">
                                        <strong className="text-lg leading-none">{contrat.nom}</strong>
                                        <p className="text-sm font-sans font-light">Abonnement actif</p>
                                    </div>
                                ) : (
                                    <div className="ml-3 flex flex-col justify-between ">
                                        <strong className="text-lg leading-none">{contrat.nom}</strong>
                                        <p className="text-sm font-sans font-light">Echéances restantes : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                    </div>
                                )}

                                <div className="flex flex-col justify-between leading-none items-end">
                                    <p className="font-sans text-xs">{new Date(contrat.datePrlvt).toLocaleDateString()}</p>
                                    <p>{contrat.prix} €</p>
                                </div>
                            </li>
                        ))}
                        <div className="total w-[100%] min-w-[390px] bg-[#282830] h-8 text-white flex items-center justify-center drop-figma">
                            <p className="text-sm font-sans">Total des prélèvements le 30 du mois
                                <span className="font-bold text-lg ml-2">




                                    {myContracts
                                        .filter((contrat) => new Date(contrat.datePrlvt).getDate() >= 15 && contrat.statusAbo === true)  // Filtrer les contrats
                                        .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                                        .toFixed(2)} €
                                </span>
                            </p>
                        </div>
                    </ul>
                )}
        </>
    )
}

export default ListeContratsSup15