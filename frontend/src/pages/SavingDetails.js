"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ICON_SP = "/logo-xs.png";
function SavingDetails() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
            react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" },
                " ",
                "\uD83D\uDCBB Test Epargnes"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement("div", { className: "flex flex-col items-center" },
            react_1.default.createElement("div", { className: "text-center mt-2" },
                react_1.default.createElement("p", { className: "text-xs" }, "Montant \u00E9pargn\u00E9"),
                react_1.default.createElement("p", { className: "text-2xl font-semibold" }, "5 800 \u20AC")),
            react_1.default.createElement("div", { "stroke-dasharray": "80,100", className: "outline-30 outline-[#0074FF]  flex flex-col items-center justify-center gap-5 mt-15 p-8 aspect-square rounded-full relative " },
                react_1.default.createElement("div", { className: "text-center" },
                    react_1.default.createElement("p", { className: "text-xs" }, "Objectif"),
                    react_1.default.createElement("p", { className: "text-3xl font-bold text-[#009CEA]" }, "10 000 \u20AC")),
                react_1.default.createElement("p", { className: "text-sm" }, "Avant Juillet 2025")))));
}
exports.default = SavingDetails;
