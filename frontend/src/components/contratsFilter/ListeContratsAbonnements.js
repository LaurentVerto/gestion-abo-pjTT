"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ContratsServices_1 = __importDefault(require("../../services/ContratsServices"));
function ListeContratsAbonnements() {
    const { deleteContrat, handleUpdate, myContracts } = (0, ContratsServices_1.default)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    const contractsFilter = myContracts.filter((contrat) => contrat.type === "Abonnement");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex items-center mt-3", onClick: handleDrop },
            react_1.default.createElement("h3", { className: "text-xs text-left ml-3 md:text-lg  hover:cursor-pointer" }, "Abonnements"),
            react_1.default.createElement("svg", { className: isOpen ? "rotate-180" : "rotate-0", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
            contractsFilter.length > 0 && (react_1.default.createElement("p", { className: "text-xs text-[#009CEA]" }, contractsFilter.length === 1
                ? `${contractsFilter.length} Contrat`
                : `${contractsFilter.length} Contrats`))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null, myContracts
            .filter((contrat) => {
            const abos = contrat.type === "Abonnement";
            return abos;
        })
            .map((contrat) => {
            return (react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased" },
                react_1.default.createElement("li", { key: contrat.id, className: `${contrat.statusAbo
                        ? "border-l-[#5B975D]"
                        : "border-l-[#975B5B]"} bg-[#282830] flex w-[90%] relative justify-between p-1  border-l-4  rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border mt-3 ` },
                    react_1.default.createElement("div", { className: `${contrat.statusAbo
                            ? "bg-[#5B975D]"
                            : "bg-[#975B5B]"} design-bar absolute left-0 top-0 h-[100%] w-1` }),
                    react_1.default.createElement("div", { className: "ml-0 flex flex-col justify-between " },
                        react_1.default.createElement("strong", { className: " text-md  leading-none" },
                            contrat.nom,
                            " |",
                            " ",
                            react_1.default.createElement("span", { className: "font-sans text-xs" },
                                contrat.prix,
                                " \u20AC")),
                        react_1.default.createElement("p", { className: "text-xs font-sans font-light" }, contrat.statusAbo
                            ? "Abonnement actif"
                            : "Abonnement Inactif"),
                        react_1.default.createElement("p", { onClick: () => deleteContrat(contrat.id), className: "text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100" }, "Supprimer l'abonnement"),
                        react_1.default.createElement("p", null)),
                    react_1.default.createElement("div", { className: "flex flex-col justify-center leading-none items-end relative group ", onClick: () => handleUpdate(contrat.id) },
                        react_1.default.createElement("div", { className: `${contrat.statusAbo
                                ? "bg-[#5B975D]"
                                : "bg-[#975B5B]"} w-12 h-5 rounded-xl
                                        transition-all ` },
                            react_1.default.createElement("div", { className: `${contrat.statusAbo
                                    ? "right-0"
                                    : "right-6"} w-6 h-6 bg-white rounded-full absolute top-3 
                                transition-all  ` }))))));
        })))));
}
exports.default = ListeContratsAbonnements;
