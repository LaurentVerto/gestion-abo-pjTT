"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Version03({ isOpen, onToggle }) {
    return (react_1.default.createElement("div", { onClick: (e) => {
            e.stopPropagation();
            onToggle();
        }, className: `box pr-1 relative content overflow-hidden transition-all ease-in-out duration-300 shadow-xl rounded-lg bg-gray-700 p-1 ${isOpen ? "h-70 overflow-scroll overflow-x-hidden p-4" : "h-8"}` },
        react_1.default.createElement("h3", { className: "text-center" },
            "Note de version : ",
            react_1.default.createElement("span", { className: "font-sans lowercase" }, "v"),
            "0.25"),
        isOpen && (react_1.default.createElement("ul", { className: "font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8" },
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "G\u00E9n\u00E9ral",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Mise \u00E0 jour esth\u00E9tique de l\u2019interface utilisateur"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Mise \u00E0 jour des ic\u00F4nes du menu de navigation"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Accueil ",
                react_1.default.createElement("span", { className: "new" }, "Nouveau"),
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Suppression du guide d\u2019utilisation"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Int\u00E9gration des liens de bienvenue via Linktree"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Pr\u00E9l\u00E8vement ",
                react_1.default.createElement("span", { className: "new" }, "Nouveau"),
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Suppression du calcul total des pr\u00E9l\u00E8vements des 15 et 30 du mois"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Ajout d\u2019un affichage des pr\u00E9l\u00E8vements sur une p\u00E9riode hebdomadaire, couvrant la semaine pr\u00E9c\u00E9dente et les trois semaines suivantes"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Contrats ",
                react_1.default.createElement("span", { className: "new" }, "Nouveau"),
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-[12px]" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Mise en place d\u2019un menu d\u00E9roulant"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Nombre de contrats disponibles par cat\u00E9gorie")))))));
}
exports.default = Version03;
