"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContratsServices_1 = __importDefault(require("../../services/ContratsServices"));
function ListeContratsX3() {
    const { myContracts, handleUp, handleDown, deleteContrat } = (0, ContratsServices_1.default)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", { className: "font-bold uppercase text-large text-left ml-3 mt-5" }, "Liste Paiement x3"),
        react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased " },
            react_1.default.createElement("div", { className: "bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 " }),
            myContracts.filter(contrat => {
                const abos = contrat.type === "Paiement x3";
                return abos;
            }).map(contrat => {
                return (react_1.default.createElement("li", { key: contrat.id, className: "bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma" },
                    react_1.default.createElement("div", { className: "ml-3 flex flex-col justify-between " },
                        react_1.default.createElement("strong", { className: " text-lg  leading-none" },
                            contrat.nom,
                            " | ",
                            react_1.default.createElement("span", { className: "font-sans text-sm" },
                                contrat.prix,
                                " \u20AC")),
                        react_1.default.createElement("div", { className: "flex items-center gap-2 " },
                            react_1.default.createElement("svg", { onClick: (e) => handleDown(contrat.id, e), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-minus-icon lucide-minus" },
                                react_1.default.createElement("path", { d: "M5 12h14" })),
                            react_1.default.createElement("p", { className: "text-xs font-sans font-thin " },
                                "Ech\u00E9ances : ",
                                react_1.default.createElement("span", { className: "text-sm font-bold" }, contrat.echeance)),
                            react_1.default.createElement("svg", { onClick: (e) => handleUp(contrat.id, e), xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-plus-icon lucide-plus" },
                                react_1.default.createElement("path", { d: "M5 12h14" }),
                                react_1.default.createElement("path", { d: "M12 5v14" })))),
                    react_1.default.createElement("div", { className: "flex flex-col justify-between leading-none items-end relative " },
                        react_1.default.createElement("p", null, new Date(contrat.datePrlvt).toLocaleDateString()),
                        react_1.default.createElement("p", { onClick: () => deleteContrat(contrat.id), className: "text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100" }, "Supprimer le contrat"))));
            }))));
}
exports.default = ListeContratsX3;
