import React from "react";

function Version02({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onToggle();
            }}
            className={`box pr-1 relative content overflow-hidden transition-all ease-in-out duration-300 shadow-xl rounded-lg bg-gray-700 p-1 ${
                isOpen ? "h-70 overflow-scroll" : "h-8"
            }`}
        >
            <h3 className="text-center">
                Note de version : <span className="font-sans lowercase">v</span>0.2
            </h3>

            {isOpen && (
                <ul className="font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8">
                    <li className="list-none font-thin">
                        Général
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">Changement de la police d'écriture</li>
                            <li className="list-disc">Changement de la couleur des boutons de menu inactifs (meilleure visibilité)</li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Accueil <span className="new">Nouveau</span>
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">
                                Présenation rapide de l'utilisation du site internet
                            </li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Prélèvement
                        <ul className="ml-5 mt-2 font-light text-xs">
                            <li className="list-disc">
                                Correction du total de prélèvement le 15 et le 30 du mois (le prélèvement du 15 était compté en double)
                            </li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Contrats
                        <ul className="ml-5 mt-2 font-light text-[12px]">
                            <li className="list-disc">Bouton supprimer contrat sur une seule ligne</li>
                        </ul>
                    </li>
                    <li className="list-none font-thin">
                        Onglet Ajouter
                        <ul className="ml-5 mt-2 font-light text-[12px]">
                            <li className="list-disc">
                                Modification de la couleur du bouton (amélioration de la visibilité sur certains appareils)
                            </li>
                        </ul>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Version02;
