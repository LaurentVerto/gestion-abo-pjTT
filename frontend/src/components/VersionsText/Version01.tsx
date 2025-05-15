import React from "react";

function Version01({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
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
                Note de version : <span className="font-sans lowercase">v</span>0.1
            </h3>

            {isOpen && (
                <ul className="font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8">
                    <li className="list-none font-thin">
                        Onglet Prélèvement
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">Ajout du total de prélèvement le 15 et le 30 du mois</li>
                            <li className="list-disc">Liste des contrats</li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Contrats
                        <ul className="ml-5 mt-2 font-light text-[12px]">
                            <li className="list-disc">Activer / Désactiver Abonnement</li>
                            <li className="list-disc">Supprimer un contrat</li>
                            <li className="list-disc">Ajouter / Retirer échéances</li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Ajouter
                        <ul className="ml-5 mt-2 font-light text-[12px]">
                            <li className="list-disc">Ajout de contrat</li>
                            <li className="list-disc">
                                Ajout de preset nom de contrat (Netflix, Canal +, Spotify, Deezer, YouTube Music)
                            </li>
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Version01;
