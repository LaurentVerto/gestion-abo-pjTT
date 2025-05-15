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
function ListeSemaine() {
    const { myContracts } = (0, ContratsServices_1.default)();
    // Fonction pour obtenir le numéro de semaine ISO
    function getWeek(date) {
        const target = new Date(date);
        target.setHours(0, 0, 0, 0);
        target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));
        const firstThursday = new Date(target.getFullYear(), 0, 4);
        firstThursday.setDate(firstThursday.getDate() + 3 - ((firstThursday.getDay() + 6) % 7));
        const diff = target.getTime() - firstThursday.getTime();
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        return 1 + Math.floor(diff / oneWeek);
    }
    const semaineCourante = getWeek(new Date());
    const [selectedWeek, setSelectedWeek] = (0, react_1.useState)(semaineCourante);
    const contratsActifs = myContracts.filter((contrat) => {
        const contratWeek = getWeek(new Date(contrat.datePrlvt));
        return contratWeek === selectedWeek && contrat.statusAbo === true;
    });
    const total = contratsActifs
        .reduce((acc, contrat) => {
        const prix = parseFloat(String(contrat.prix).replace(",", "."));
        return acc + (isNaN(prix) ? 0 : prix);
    }, 0)
        .toFixed(2);
    const handleSelectWeek = (semaineCourante) => {
        setSelectedWeek(semaineCourante);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "w-full flex justify-center mt-5 " },
            react_1.default.createElement("ul", { className: "flex items-center justify-center gap-4 " },
                react_1.default.createElement("li", { onClick: () => handleSelectWeek(semaineCourante - 1), className: ` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm ${selectedWeek === semaineCourante - 1
                        ? "bg-[#009CEA]"
                        : "bg-none"}` }, semaineCourante - 1),
                react_1.default.createElement("li", { onClick: () => handleSelectWeek(semaineCourante), className: ` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm ${selectedWeek === semaineCourante
                        ? "bg-[#009CEA]"
                        : "bg-none"}` },
                    semaineCourante,
                    " "),
                react_1.default.createElement("li", { onClick: () => handleSelectWeek(semaineCourante + 1), className: ` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm ${selectedWeek === semaineCourante + 1
                        ? "bg-[#009CEA]"
                        : "bg-none"}` }, semaineCourante + 1),
                react_1.default.createElement("li", { onClick: () => handleSelectWeek(semaineCourante + 2), className: ` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm ${selectedWeek === semaineCourante + 2
                        ? "bg-[#009CEA]"
                        : "bg-none"}` }, semaineCourante + 2),
                react_1.default.createElement("li", { onClick: () => handleSelectWeek(semaineCourante + 3), className: ` pt-1 pb-1 pr-3 pl-3 hover:bg-[#009CEA] rounded-sm ${selectedWeek === semaineCourante + 3
                        ? "bg-[#009CEA]"
                        : "bg-none"}` }, semaineCourante + 3))),
        contratsActifs.length > 0 && (react_1.default.createElement("ul", { className: "flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 " },
            react_1.default.createElement("div", { className: "bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 " }),
            contratsActifs.map((contrat) => (react_1.default.createElement("li", { key: contrat.id, className: "flex w-[90%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center" },
                contrat.type === "Abonnement" ? (react_1.default.createElement("div", { className: "ml-0 flex flex items-center gap-3 justify-between " },
                    react_1.default.createElement("img", { src: contrat.image, alt: "logo_contract", className: "w-10 h-10 rounded-lg" }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", { className: "text-lg leading-none bold" }, contrat.nom),
                        react_1.default.createElement("p", { className: "font-sans text-xs font-light mt-1" }, new Date(contrat.datePrlvt).toLocaleDateString())))) : (react_1.default.createElement("div", { className: "ml-0 flex flex items-center gap-3 justify-between " },
                    react_1.default.createElement("img", { src: contrat.image, alt: "logo_contract", className: "h-10 pb-1 w-10 object-contain rounded-lg " }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("strong", { className: "text-lg leading-none" }, contrat.nom),
                        react_1.default.createElement("p", { className: "font-sans text-xs font-light mt-1" }, new Date(contrat.datePrlvt).toLocaleDateString()),
                        react_1.default.createElement("p", { className: "text-xs font-sans font-light" },
                            "\u00C9ch\u00E9ances restantes :",
                            react_1.default.createElement("span", { className: "text-sm font-bold" },
                                " ",
                                contrat.echeance))))),
                react_1.default.createElement("div", { className: "flex flex-col justify-between leading-none items-end" },
                    react_1.default.createElement("p", null,
                        contrat.prix,
                        " \u20AC"))))))),
        react_1.default.createElement("div", { className: "total w-[100%] min-w-[390px] h-8 text-white flex flex-col items-center absolute bottom-25 justify-center" },
            react_1.default.createElement("p", { className: "text-sm font-sans" }, "Total :"),
            react_1.default.createElement("span", { className: "font-bold text-lg" },
                total,
                " \u20AC"))));
}
exports.default = ListeSemaine;
