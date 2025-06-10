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
const SavingsServices_1 = __importDefault(require("../services/SavingsServices"));
const uuid_1 = require("uuid");
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
function Saving() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { savings, setSavings, selectedSaving, updateSavingById, savingsCompleted } = (0, SavingsServices_1.default)();
    const [message, setMessage] = (0, react_1.useState)("");
    const [editMode, setEditMode] = (0, react_1.useState)(false);
    const [newSaving, setNewSaving] = (0, react_1.useState)({
        id: (0, uuid_1.v4)(),
        name: "",
        amount: undefined,
        deadline: Date.now().toString(),
        deposit: [],
        withdrawal: [],
    });
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === "amount") {
            newValue = parseFloat(value); // assure que c'est bien un nombre
        }
        setNewSaving((prev) => (Object.assign(Object.assign({}, prev), { [name]: newValue })));
    };
    const handleSubmit = () => {
        const dataLocal = localStorage.getItem("mySavings");
        const currentSavings = dataLocal ? JSON.parse(dataLocal) : [];
        const isExisting = currentSavings.some(s => s.id === newSaving.id);
        if (isExisting) {
            updateSavingById(newSaving);
            setMessage("Épargne mise à jour avec succès");
            setTimeout(() => {
                setIsOpenModify(false);
                navigate(`/epargnes/${newSaving.id}`);
            }, 2000);
        }
        else {
            // Ajout en partant de la liste à jour
            const upSavings = [...currentSavings, newSaving];
            localStorage.setItem("mySavings", JSON.stringify(upSavings));
            setSavings(upSavings);
            setMessage("Création de l'épargne réussie");
            setTimeout(() => {
                setIsOpen(false);
                navigate(`/epargnes/${newSaving.id}`);
            }, 2000);
        }
        // Reset du formulaire
        setNewSaving({
            id: (0, uuid_1.v4)(),
            name: "",
            amount: undefined,
            deadline: Date.now().toString(),
            deposit: [],
            withdrawal: [],
        });
    };
    const handleEditMode = () => {
        setEditMode(!editMode);
    };
    const [isOpenModify, setIsOpenModify] = (0, react_1.useState)(false);
    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (selectedSaving) {
            setNewSaving(Object.assign({}, selectedSaving));
        }
        setIsOpenModify(true);
        console.log(newSaving);
    };
    return (react_1.default.createElement("div", { className: "" },
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
            react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" }, "Epargnes"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement(CurrentSavings_1.default, { editMode: editMode, isOpenModify: isOpenModify, handleEdit: handleEdit, setNewSaving: setNewSaving }),
        react_1.default.createElement(SavingsCompleted_1.default, { editMode: editMode, isOpenModify: isOpenModify, handleEdit: handleEdit, setNewSaving: setNewSaving }),
        react_1.default.createElement("div", { className: "absolute bottom-20 left-5 flex justify-between w-[90%] items-center" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("ul", { className: "text-xs text-[#009CEA] " },
                    react_1.default.createElement("li", null,
                        savings.length,
                        " Epargnes en cours"),
                    react_1.default.createElement("li", null,
                        savingsCompleted.length,
                        " Epargne finalis\u00E9"))),
            react_1.default.createElement("button", { className: `${editMode ? "border border-blue-500 opacity-100 bg-[#009CEA] " : "border border-white opacity-50"}  py-1 px-3 rounded-lg text-xs`, onClick: handleEditMode }, "Edit Mode"),
            react_1.default.createElement("div", { onClick: handleDrop, className: "z-110" },
                react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer pointer-event-none" },
                    react_1.default.createElement("path", { d: "M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    react_1.default.createElement("path", { d: "M16.6667 25H33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                    react_1.default.createElement("path", { d: "M25 16.6667V33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))),
        isOpenModify && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-120 flex flex-col justify-center items-center gap-3" },
                react_1.default.createElement("h4", null, "Modifier une \u00E9pargne"),
                react_1.default.createElement("input", { onChange: handleChange, name: "name", type: "text", value: newSaving.name, placeholder: "Nom de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { onChange: handleChange, name: "amount", type: "number", value: newSaving.amount === undefined ? "" : newSaving.amount, placeholder: "Montant de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { name: "deadline", type: "date", placeholder: "YYYY-MM-DD", value: newSaving.deadline, onChange: handleChange, className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("button", { onClick: handleSubmit, className: "mt-8\r\n                shadow-lg\r\n                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Modifier l'\u00E9pargne"),
                react_1.default.createElement("button", { onClick: (e) => {
                        handleEdit(e);
                        setIsOpenModify(!isOpenModify);
                    }, className: "mt-2\r\n                shadow-lg\r\n                bg-[#FE6666]/50 min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Annuler les modification"),
                react_1.default.createElement("p", null, message)))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3" },
                react_1.default.createElement("h4", null, "Ajout d'une \u00E9pargne"),
                react_1.default.createElement("input", { onChange: handleChange, name: "name", type: "text", value: newSaving.name, placeholder: "Nom de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { onChange: handleChange, name: "amount", type: "number", value: newSaving.amount === undefined ? "" : newSaving.amount, placeholder: "Montant de l'\u00E9pargne", className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("input", { name: "deadline", type: "date", placeholder: "YYYY-MM-DD", value: newSaving.deadline, onChange: handleChange, className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm " }),
                react_1.default.createElement("button", { onClick: handleSubmit, className: "mt-8\r\n                shadow-lg\r\n                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Cr\u00E9er l'\u00E9pargne"),
                react_1.default.createElement("button", { onClick: handleDrop, className: "mt-2\r\n                shadow-lg\r\n                bg-[#FE6666]/50 min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm " }, "Annuler"),
                react_1.default.createElement("p", null, message))))));
}
exports.default = Saving;
