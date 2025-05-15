import React from "react";

function Version03({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggle();
            }}
            className={`box pr-1 relative content overflow-hidden transition-all ease-in-out duration-300 shadow-xl rounded-lg bg-gray-700 p-1 ${
                isOpen ? "h-70 overflow-scroll overflow-x-hidden p-4" : "h-8"
            }`}
        >
            <h3 className="text-center">
                Note de version : <span className="font-sans lowercase">v</span>0.25
            </h3>

            {isOpen && (
                <ul className="font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8">
                    <li className="list-none font-thin">
                        Général
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">Mise à jour esthétique de l’interface utilisateur</li>
                            <li className="list-disc">Mise à jour des icônes du menu de navigation</li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Accueil <span className="new">Nouveau</span>
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">
                                Suppression du guide d’utilisation
                            </li>
                            <li className="list-disc">
                                Intégration des liens de bienvenue via Linktree
                            </li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Prélèvement <span className="new">Nouveau</span>
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">
                                Suppression du calcul total des prélèvements des 15 et 30 du mois
                            </li>
                            <li className="list-disc">
                                Ajout d’un affichage des prélèvements sur une période hebdomadaire, couvrant la semaine précédente et les trois semaines suivantes
                            </li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Contrats <span className="new">Nouveau</span>
                        <ul className="ml-5 mt-2 font-light text-[12px]">
                            <li className="list-disc">Mise en place d’un menu déroulant</li>
                            <li className="list-disc">Nombre de contrats disponibles par catégorie</li>
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Version03;
