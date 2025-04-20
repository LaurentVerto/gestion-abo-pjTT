import useContratServices from "../../services/ContratsServices";

function ListeContratsX4() {

    const {myContracts, setMesContrats, handleDown, handleUp, supprimerContrat} = useContratServices();

    return(

        <>
        <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x4</h3>
        
        <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased ">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>

                    {myContracts.filter(contrat => {
                        const abos = contrat.type === "Paiement x4";
                        
                        return abos;
                    }).map(contrat => {
                        return (
                            <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                            <div className="ml-3 flex flex-col justify-between ">
                                <strong className=" text-lg  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                                <div className="flex items-center gap-2 " >
                                    <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
                                    <p className="text-xs font-sans font-thin ">Echéances : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                    <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between leading-none items-end relative ">
                                        
                                        <p>{new Date(contrat.datePrlvt).toLocaleDateString()}</p>

                                        <p onClick={() => supprimerContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer le contrat</p>
                                    </div>
                            </li>
                        )
                    })}
                </ul>
                </>

                )
}


export default ListeContratsX4;