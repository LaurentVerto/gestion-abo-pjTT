"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContratsServices_1 = __importDefault(require("../../services/ContratsServices"));
function ListeContratsSup15() {
    const { myContracts, setMyContracts } = (0, ContratsServices_1.default)();
    return (react_1.default.createElement(react_1.default.Fragment, null, myContracts.some(contrat => {
        const day = new Date(contrat.datePrlvt).getDate();
        return day > 15 && contrat.statusAbo === true;
    }) && (react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 " },
        react_1.default.createElement("div", { className: "bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 " }),
        myContracts.filter(contrat => {
            const day = new Date(contrat.datePrlvt).getDate();
            return day > 15 && contrat.statusAbo === true;
        }).map(contrat => (react_1.default.createElement("li", { key: contrat.id, className: "bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma" },
            contrat.type === "Abonnement" ? (react_1.default.createElement("div", { className: "ml-3 flex flex-col justify-between " },
                react_1.default.createElement("strong", { className: "text-lg leading-none" }, contrat.nom),
                react_1.default.createElement("p", { className: "text-sm font-sans font-light" }, "Abonnement actif"))) : (react_1.default.createElement("div", { className: "ml-3 flex flex-col justify-between " },
                react_1.default.createElement("strong", { className: "text-lg leading-none" }, contrat.nom),
                react_1.default.createElement("p", { className: "text-sm font-sans font-light" },
                    "Ech\u00E9ances restantes : ",
                    react_1.default.createElement("span", { className: "text-sm font-bold" }, contrat.echeance)))),
            react_1.default.createElement("div", { className: "flex flex-col justify-between leading-none items-end" },
                react_1.default.createElement("p", { className: "font-sans text-xs" }, new Date(contrat.datePrlvt).toLocaleDateString()),
                react_1.default.createElement("p", null,
                    contrat.prix,
                    " \u20AC"))))),
        react_1.default.createElement("div", { className: "total w-[100%] min-w-[390px] bg-[#282830] h-8 text-white flex items-center justify-center drop-figma" },
            react_1.default.createElement("p", { className: "text-sm font-sans" },
                "Total des pr\u00E9l\u00E8vements le 30 du mois",
                react_1.default.createElement("span", { className: "font-bold text-lg ml-2" },
                    myContracts
                        .filter((contrat) => new Date(contrat.datePrlvt).getDate() > 15 && contrat.statusAbo === true) // Filtrer les contrats
                        .reduce((acc, contrat) => acc + (parseFloat(contrat.prix.toString()) || 0), 0) // S'assurer que chaque prix est un nombre valide
                        .toFixed(2),
                    " \u20AC")))))));
}
exports.default = ListeContratsSup15;
