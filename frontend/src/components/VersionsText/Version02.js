"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Version02({ isOpen, onToggle }) {
    return (react_1.default.createElement("div", { onClick: (e) => {
            e.stopPropagation();
            onToggle();
        }, className: `box pr-1 relative content overflow-hidden transition-all ease-in-out duration-300 shadow-xl rounded-lg bg-gray-700 p-1 ${isOpen ? "h-70 overflow-scroll" : "h-8"}` },
        react_1.default.createElement("h3", { className: "text-center" },
            "Note de version : ",
            react_1.default.createElement("span", { className: "font-sans lowercase" }, "v"),
            "0.2"),
        isOpen && (react_1.default.createElement("ul", { className: "font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8" },
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "G\u00E9n\u00E9ral",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Changement de la police d'\u00E9criture"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Changement de la couleur des boutons de menu inactifs (meilleure visibilit\u00E9)"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Accueil ",
                react_1.default.createElement("span", { className: "new" }, "Nouveau"),
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Pr\u00E9senation rapide de l'utilisation du site internet"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Pr\u00E9l\u00E8vement",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Correction du total de pr\u00E9l\u00E8vement le 15 et le 30 du mois (le pr\u00E9l\u00E8vement du 15 \u00E9tait compt\u00E9 en double)"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Contrats",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-[12px]" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Bouton supprimer contrat sur une seule ligne"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Ajouter",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-[12px]" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Modification de la couleur du bouton (am\u00E9lioration de la visibilit\u00E9 sur certains appareils)")))))));
}
exports.default = Version02;
