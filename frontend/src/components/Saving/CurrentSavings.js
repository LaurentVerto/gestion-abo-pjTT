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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
function CurrentSavings() {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex items-center mt-3", onClick: handleDrop },
            react_1.default.createElement("h3", { className: "text-xs text-left ml-3 md:text-lg  hover:cursor-pointer" }, "Epargnes en cours"),
            react_1.default.createElement("svg", { className: isOpen ? "rotate-180" : "rotate-0", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M6 9L12 15L18 9", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("ul", { className: "flex flex-col items-center justify-center mt-3" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/epargnes/detail", className: "bg-[var(--lfpc)]/50 w-[90%] max-w-[700px] p-3 rounded-lg drop-figma" },
                    react_1.default.createElement("div", { className: "flex  justify-between" },
                        react_1.default.createElement("h3", { className: "font-medium" }, "\uD83D\uDCBB Test epargnes"),
                        react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M9 18L15 12L9 6", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }))),
                    react_1.default.createElement("div", { className: "mt-3 w-full" },
                        react_1.default.createElement("div", { className: "bg-[#41414e]  w-[100%] rounded-full flex justify-start relative\r\n                        drop-figma\r\n                        " },
                            react_1.default.createElement("div", { className: " w-[80%] rounded-full text-center\r\n                            bg-linear-to-r from-[#1d1d21] to-blue-500\r\n                            " },
                                react_1.default.createElement("p", { className: "p-1.5 text-sm" }, "80 %"))))))))));
}
exports.default = CurrentSavings;
