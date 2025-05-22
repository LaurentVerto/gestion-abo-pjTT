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
const CurrentSavings_1 = __importDefault(require("../components/Saving/CurrentSavings"));
const SavingsCompleted_1 = __importDefault(require("../components/Saving/SavingsCompleted"));
const ICON_SP = "/logo-xs.png";
function Saving() {
    const [newSaving, setNewSaving] = (0, react_1.useState)({
        name: "",
        amount: 0,
        deadline: Date.now().toString()
    });
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
    };
    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        let newValue = value;
        setNewSaving((prev) => (Object.assign(Object.assign({}, prev), { [fieldName]: newValue })));
        console.log(newSaving);
    };
    const handleSubmit = () => {
        const jsonData = JSON.stringify(newSaving);
        localStorage.setItem("myContracts", jsonData);
    };
    return (react_1.default.createElement("div", { className: "realtive" },
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
            react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" }, "Epargnes"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement(CurrentSavings_1.default, null),
        react_1.default.createElement(SavingsCompleted_1.default, null),
        react_1.default.createElement("div", { className: "absolute bottom-20 left-5 flex justify-between w-[90%] items-center" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("ul", { className: "text-xs text-[#009CEA] " },
                    react_1.default.createElement("li", null, "3 Epargnes en cours"),
                    react_1.default.createElement("li", null, "1 Epargne finalis\u00E9"))),
            react_1.default.createElement("div", { onClick: handleDrop, className: "z-110" },
                react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer pointer-event-none" },
                    react_1.default.createElement("path", { d: "M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    react_1.default.createElement("path", { d: "M16.6667 25H33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    react_1.default.createElement("path", { d: "M25 16.6667V33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3" },
                react_1.default.createElement("h4", null, "Ajout d'une \u00E9pargne"),
                react_1.default.createElement("input", { onChange: handleChange, name: "name", type: "text", placeholder: "Nom de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { onChange: handleChange, name: "amount", type: "number", placeholder: "Montant de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { name: "deadline", type: "date", placeholder: "YYYY-MM-DD", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("button", { className: "mt-8\r\n                shadow-lg\r\n                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Cr\u00E9er l'\u00E9pargne"),
                react_1.default.createElement("button", { onClick: handleDrop, className: "mt-2\r\n                shadow-lg\r\n                bg-[#FE6666]/50 min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Annuler"))))));
}
exports.default = Saving;
