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
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
function SavingDetails() {
    var _a, _b, _c, _d;
    const { id } = (0, react_router_dom_1.useParams)();
    const [selected, setSelected] = (0, react_1.useState)(null);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
    };
    (0, react_1.useEffect)(() => {
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            try {
                const parsedData = JSON.parse(dataLocal);
                // 🔍 Trouve la donnée avec l'ID correspondant
                const foundItem = parsedData.find((item) => item.id === id);
                setSelected(foundItem !== null && foundItem !== void 0 ? foundItem : null);
            }
            catch (error) {
                console.error("Erreur JSON :", error);
            }
        }
    }, [id]);
    const totalDeposit = (_b = (_a = selected === null || selected === void 0 ? void 0 : selected.deposit) === null || _a === void 0 ? void 0 : _a.reduce((acc, tx) => { var _a; return acc + ((_a = tx.amount) !== null && _a !== void 0 ? _a : 0); }, 0)) !== null && _b !== void 0 ? _b : 0;
    const totalWithdrawal = (_d = (_c = selected === null || selected === void 0 ? void 0 : selected.withdrawal) === null || _c === void 0 ? void 0 : _c.reduce((acc, tx) => { var _a; return acc + ((_a = tx.amount) !== null && _a !== void 0 ? _a : 0); }, 0)) !== null && _d !== void 0 ? _d : 0;
    const netAmount = totalDeposit - totalWithdrawal;
    const progressValue = selected && selected.amount
        ? Math.min((netAmount / selected.amount) * 100, 100)
        : 0;
    function monthsDiff(dateFrom, dateTo) {
        return (dateTo.getMonth() -
            dateFrom.getMonth() +
            12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
    }
    const today = new Date();
    const deadlineDate = selected ? new Date(selected.deadline) : null;
    const monthsRemaining = deadlineDate ? monthsDiff(today, deadlineDate) : 0;
    const monthlySavingNeeded = selected && selected.amount
        ? monthsRemaining >= 1
            ? Math.ceil(selected.amount / monthsRemaining)
            : selected.amount - netAmount // moins d'un mois, épargner tout
        : 0; // pas de données
    return (react_1.default.createElement("div", null,
        selected && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
                react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" },
                    " ",
                    selected.name),
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
            react_1.default.createElement("div", { className: "flex flex-col items-center" },
                react_1.default.createElement("div", { className: "text-center mt-2" },
                    react_1.default.createElement("p", { className: "text-xs" }, "Montant \u00E9pargn\u00E9"),
                    react_1.default.createElement("p", { className: "text-2xl font-semibold" }, netAmount !== undefined
                        ? netAmount.toLocaleString() + " €"
                        : "nope")),
                react_1.default.createElement("div", { className: "relative flex items-center justify-center mt-5" },
                    react_1.default.createElement("div", { style: {
                            position: "relative",
                            display: "inline-flex",
                        } },
                        react_1.default.createElement(CircularProgress_1.default, { variant: "determinate", value: 100, size: 170, thickness: 3, sx: { color: "#1d1d21" } }),
                        react_1.default.createElement(CircularProgress_1.default, { variant: "determinate", value: progressValue, size: 170, thickness: 3, sx: {
                                color: "#009CEA",
                                position: "absolute",
                                left: 0,
                                top: 0,
                            } })),
                    react_1.default.createElement("div", { className: "absolute flex flex-col items-center justify-center " },
                        react_1.default.createElement("p", { className: "text-xs" }, "Objectif"),
                        react_1.default.createElement("p", { className: "text-2xl font-bold text-[#009CEA]" }, selected.amount),
                        react_1.default.createElement("p", { className: "text-xs mt-2 flex flex-col items-center " },
                            "Avant ",
                            "",
                            react_1.default.createElement("span", { className: "uppercase text-sky-500" }, new Date(selected.deadline).toLocaleDateString("fr-FR", {
                                month: "long",
                                year: "numeric",
                            }))))),
                react_1.default.createElement("p", { className: " text-xs p-3 mt-2 text-center " },
                    "Tu dois \u00E9pargner",
                    " ",
                    react_1.default.createElement("span", { className: "text-base font-bold text-[#009CEA] " }, monthlySavingNeeded),
                    " ",
                    "euros / mois si tu veux atteindre ton objectif :",
                    " ",
                    react_1.default.createElement("span", { className: "text-base font-bold text-[#009CEA] " }, "Vacances"),
                    " "),
                react_1.default.createElement("div", { className: "w-full px-4" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between mt-2 text-xs" },
                        react_1.default.createElement("p", null, "Transactions"),
                        react_1.default.createElement("div", { className: "flex justify-between gap-15" },
                            react_1.default.createElement("span", { className: "text-xs text-[#00FF62]/50" }, "D\u00E9pots = 150 \u20AC"),
                            react_1.default.createElement("span", { className: "text-xs text-[#FF0000]/50" }, "Retrait = 50 \u20AC")))),
                react_1.default.createElement("ul", { className: "w-full px-5 mt-3 flex flex-col gap-3 overflow-hidden h-[20vh]" }, selected && (react_1.default.createElement(react_1.default.Fragment, null,
                    selected.deposit.map((depo) => (react_1.default.createElement("li", { className: "flex w-[92%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                        react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                        react_1.default.createElement("p", null, depo.amount)))),
                    selected.withdrawal.map((withdraw) => (react_1.default.createElement("li", { className: "flex w-[92%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                        react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                        react_1.default.createElement("p", null, withdraw.amount)))))))))),
        react_1.default.createElement("div", { onClick: handleDrop, className: "z-110 absolute right-5 bottom-20" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-plus-icon lucide-plus" },
                react_1.default.createElement("path", { d: "M5 12h14" }),
                react_1.default.createElement("path", { d: "M12 5v14" }))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3 backdrop-blur-[2px]" },
                react_1.default.createElement("p", null, "Ajouter une transaction"),
                react_1.default.createElement("select", { name: "", id: "", className: "mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm" },
                    react_1.default.createElement("option", { value: "deposit" }, "D\u00E9p\u00F4t"),
                    react_1.default.createElement("option", { value: "withdrawal" }, "Retrait")),
                react_1.default.createElement("input", { type: "number", placeholder: "entrer le montant", className: "mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm" }))))));
}
exports.default = SavingDetails;
