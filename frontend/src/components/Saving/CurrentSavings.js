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
const react_router_dom_1 = require("react-router-dom");
const SavingsServices_1 = __importDefault(require("../../services/SavingsServices"));
//{editMode}:{editMode: boolean}
// editMode:Boolean
function CurrentSavings({ editMode, isOpenModify, handleEdit, setNewSaving, }) {
    const { savings, setSavings, deleteSavingById } = (0, SavingsServices_1.default)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
    };
    const calculateProgress = (saving) => {
        var _a, _b, _c, _d, _e;
        const totalDeposit = (_b = (_a = saving.deposit) === null || _a === void 0 ? void 0 : _a.reduce((sum, dep) => { var _a; return sum + ((_a = dep.amount) !== null && _a !== void 0 ? _a : 0); }, 0)) !== null && _b !== void 0 ? _b : 0;
        const totalWithdrawal = (_d = (_c = saving.withdrawal) === null || _c === void 0 ? void 0 : _c.reduce((sum, wit) => { var _a; return sum + ((_a = wit.amount) !== null && _a !== void 0 ? _a : 0); }, 0)) !== null && _d !== void 0 ? _d : 0;
        const netSaved = totalDeposit - totalWithdrawal;
        const goal = (_e = saving.amount) !== null && _e !== void 0 ? _e : 0;
        if (!goal || goal === 0)
            return 0;
        const progress = (netSaved / goal) * 100;
        return Math.max(0, Math.min(Math.round(progress), 100)); // borné entre 0 et 100
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex items-center mt-3", onClick: handleDrop },
            react_1.default.createElement("h3", { className: "text-xs text-left ml-3 md:text-lg  hover:cursor-pointer" }, "Epargnes en cours"),
            react_1.default.createElement("svg", { className: isOpen ? "rotate-180" : "rotate-0", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("ul", { className: "flex flex-col items-center justify-center mt-3 gap-3" }, savings.map((saving) => (react_1.default.createElement(react_router_dom_1.Link, { key: saving.id, to: `/epargnes/${saving.id}`, className: "bg-[var(--lfpc)]/50 w-[90%] max-w-[700px] p-3 rounded-lg drop-figma" },
                react_1.default.createElement("div", { className: "flex  justify-between" },
                    react_1.default.createElement("h3", { className: "font-medium" }, saving.name),
                    editMode ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: "flex gap-3" },
                            react_1.default.createElement("button", { onClick: (e) => {
                                    deleteSavingById(saving.id, e);
                                }, className: "bg-red-500/30 py-0 px-4 rounded-lg text-xs" }, "X"),
                            react_1.default.createElement("button", { onClick: (e) => {
                                    handleEdit(e);
                                    setNewSaving(saving);
                                }, className: "bg-yellow-500/30 py-0 px-4 rounded-lg text-xs" }, "modifier")))) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M9 18L15 12L9 6", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))))),
                react_1.default.createElement("div", { className: "mt-3 w-full" },
                    react_1.default.createElement("div", { className: "bg-[#41414e]  w-[100%] rounded-lg flex justify-start relative\r\n                        drop-figma\r\n                        " },
                        react_1.default.createElement("div", { style: {
                                width: `${calculateProgress(saving)}%`,
                            }, className: "w-full rounded-lg text-center\r\n                                            bg-linear-to-r from-[#1d1d21] to-blue-500\r\n                                            " },
                            react_1.default.createElement("p", { className: "p-1.5 text-sm min-w-20" },
                                calculateProgress(saving),
                                " %"))))))))))));
}
exports.default = CurrentSavings;
