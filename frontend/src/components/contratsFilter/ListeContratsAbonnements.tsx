import React from "react";
import useContratServices from "../../services/ContratsServices";

function ListeContratsAbonnements() {

    
    const {deleteContrat, handleUpdate, myContracts,} = useContratServices();

    

    return(

<>
    

    <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste abonnements</h3>
    {
        myContracts.filter(contrat => {
            const abos = contrat.type === "Abonnement";
            return abos;
        }).map(contrat => {
            return (
                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased">

                    <li key={contrat.id} className={`${contrat.statusAbo ? "border-l-[#5B975D]" : "border-l-[#975B5B]"} bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4  rounded-br-[5px] rounded-tr-[5px] drop-figma mt-3`}>
                        <div className="ml-3 flex flex-col justify-between ">
                            <strong className=" text-md  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                            <p className="text-sm font-sans font-light">{contrat.statusAbo ? "Abonnement actif" : "Abonnement Inactif"}</p>
                            <p onClick={() => deleteContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer l'abonnement</p>
                            <p></p>
                        </div>

                        <div className="flex flex-col justify-center leading-none items-end relative group " onClick={() => handleUpdate(contrat.id)}>
                            <div className={`${contrat.statusAbo ? "bg-[#5B975D]" : "bg-[#975B5B]"} w-12 h-5 rounded-xl
                                        transition-all `}>

                                <div className={`${contrat.statusAbo ? "right-0" : "right-6"} w-6 h-6 bg-white rounded-full absolute top-4 
                                transition-all  `}></div>
                            </div>
                        </div>
                    </li>
                </ul>
            )
        })
    }
    </>
)

}

export default ListeContratsAbonnements;