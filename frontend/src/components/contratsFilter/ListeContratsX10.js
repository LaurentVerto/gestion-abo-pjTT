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
function ListeContratsX10() {
    const { myContracts, handleDown, handleUp, deleteContrat } = (0, ContratsServices_1.default)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex items-center mt-3", onClick: handleDrop },
            react_1.default.createElement("h3", { className: "text-xs text-left ml-3 " }, "Paiements x10"),
            react_1.default.createElement("svg", { className: isOpen ? "rotate-180" : "rotate-0", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        isOpen &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased " },
                    react_1.default.createElement("div", { className: "bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 " }),
                    myContracts.filter(contrat => {
                        const abos = contrat.type === "Paiement x10";
                        return abos;
                    }).map(contrat => {
                        return (react_1.default.createElement("li", { key: contrat.id, className: "bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] gradient-border drop-figma" },
                            react_1.default.createElement("div", { className: "ml-3 flex flex-col justify-between " },
                                react_1.default.createElement("strong", { className: " text-md   leading-none" },
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
                                react_1.default.createElement("p", { className: 'text-xs' }, new Date(contrat.datePrlvt).toLocaleDateString()),
                                react_1.default.createElement("p", { onClick: () => deleteContrat(contrat.id), className: "text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100" }, "Supprimer le contrat"))));
                    })))));
}
exports.default = ListeContratsX10;
