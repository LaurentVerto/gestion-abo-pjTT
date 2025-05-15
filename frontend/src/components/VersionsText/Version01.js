"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Version01({ isOpen, onToggle }) {
    return (react_1.default.createElement("div", { onClick: (e) => {
            e.stopPropagation();
            onToggle();
        }, className: `box pr-1 relative content overflow-hidden transition-all ease-in-out duration-300 shadow-xl rounded-lg bg-gray-700 p-1 ${isOpen ? "h-70 overflow-scroll overflow-x-hidden p-4" : "h-8"}` },
        react_1.default.createElement("h3", { className: "text-center" },
            "Note de version : ",
            react_1.default.createElement("span", { className: "font-sans lowercase" }, "v"),
            "0.1"),
        isOpen && (react_1.default.createElement("ul", { className: "font-sans text-sm list-disc ml-2 mt-3 flex flex-col gap-8" },
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Pr\u00E9l\u00E8vement",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-xs" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Ajout du total de pr\u00E9l\u00E8vement le 15 et le 30 du mois"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Liste des contrats"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Contrats",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-[12px]" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Activer / D\u00E9sactiver Abonnement"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Supprimer un contrat"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Ajouter / Retirer \u00E9ch\u00E9ances"))),
            react_1.default.createElement("li", { className: "list-none font-thin" },
                "Onglet Ajouter",
                react_1.default.createElement("ul", { className: "ml-5 mt-2 font-light text-[12px]" },
                    react_1.default.createElement("li", { className: "list-disc" }, "Ajout de contrat"),
                    react_1.default.createElement("li", { className: "list-disc" }, "Ajout de preset nom de contrat (Netflix, Canal +, Spotify, Deezer, YouTube Music)")))))));
}
exports.default = Version01;
