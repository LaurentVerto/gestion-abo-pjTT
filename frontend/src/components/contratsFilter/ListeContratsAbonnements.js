"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContratsServices_1 = __importDefault(require("../../services/ContratsServices"));
function ListeContratsAbonnements() {
    const { deleteContrat, handleUpdate, myContracts, } = (0, ContratsServices_1.default)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", { className: "font-bold uppercase text-large text-left ml-3 mt-5" }, "Liste abonnements"),
        myContracts.filter(contrat => {
            const abos = contrat.type === "Abonnement";
            return abos;
        }).map(contrat => {
            return (react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased" },
                react_1.default.createElement("li", { key: contrat.id, className: `${contrat.statusAbo ? "border-l-[#5B975D]" : "border-l-[#975B5B]"} bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4  rounded-br-[5px] rounded-tr-[5px] drop-figma mt-3` },
                    react_1.default.createElement("div", { className: "ml-3 flex flex-col justify-between " },
                        react_1.default.createElement("strong", { className: " text-md  leading-none" },
                            contrat.nom,
                            " | ",
                            react_1.default.createElement("span", { className: "font-sans text-sm" },
                                contrat.prix,
                                " \u20AC")),
                        react_1.default.createElement("p", { className: "text-sm font-sans font-light" }, contrat.statusAbo ? "Abonnement actif" : "Abonnement Inactif"),
                        react_1.default.createElement("p", { onClick: () => deleteContrat(contrat.id), className: "text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100" }, "Supprimer l'abonnement"),
                        react_1.default.createElement("p", null)),
                    react_1.default.createElement("div", { className: "flex flex-col justify-center leading-none items-end relative group ", onClick: () => handleUpdate(contrat.id) },
                        react_1.default.createElement("div", { className: `${contrat.statusAbo ? "bg-[#5B975D]" : "bg-[#975B5B]"} w-12 h-5 rounded-xl
                                        transition-all ` },
                            react_1.default.createElement("div", { className: `${contrat.statusAbo ? "right-0" : "right-6"} w-6 h-6 bg-white rounded-full absolute top-4 
                                transition-all  ` }))))));
        })));
}
exports.default = ListeContratsAbonnements;
